import { expect } from 'chai';

import compose from '../src';

describe('compose', () => {
  let fns;
  beforeEach(() => {
    fns = [
      x => x + 1,
      x => x * 2,
      x => x * x,
      x => x - 1,
      x => x / 2,
    ];
  });

  it('with 0 function', () => {
    const fn = compose();

    expect(fn(1)).to.equal(1);
  });

  it('with 1 function', () => {
    const fn = compose(fns[0]);

    expect(fn(1)).to.equal(2);
  });

  it('with more than 1 function', () => {
    expect(compose(...fns.slice(0, 2))(1)).to.equal(4);
    expect(compose(...fns.slice(0, 3))(1)).to.equal(16);
    expect(compose(...fns.slice(0, 4))(1)).to.equal(15)
    expect(compose(...fns)(1)).to.equal(7.5);;
  });
});

describe('compose immutablity', () => {
  it('with immutable', () => {
    const action = { type: 'bypass' };
    const middleware1 = action => action;
    const middleware2 = action => { console.log(action); return action; };
    const middleware3 = action => { /* post action */; return action; };

    const fn = compose(
      middleware1,
      middleware2,
      middleware3,
    );

    expect(fn(action)).to.equal(action);
  });

  it('with mutable', () => {
    const ctx = { state: 1 };
    const middleware1 = ctx => { ctx.state += 1; return ctx; };
    const middleware2 = ctx => { ctx.state *= 2; return ctx; };
    const middleware3 = ctx => { ctx.ratelimit = false; return ctx; };

    const fn = compose(
      middleware1,
      middleware2,
      middleware3,
    );

    expect(fn(ctx)).to.deep.equal({ state: 4, ratelimit: false });
  });
});