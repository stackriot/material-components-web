/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

import {assert} from 'chai';
import bel from 'bel';
import domEvents from 'dom-events';
import td from 'testdouble';

import {MDCRipple} from '../../../packages/mdc-ripple/index';
import {cssClasses} from '../../../packages/mdc-ripple/constants';
import * as util from '../../../packages/mdc-ripple/util';
import {install as installClock} from '../helpers/clock';

suite('MDCRipple');

test('attachTo initializes and returns a ripple', () => {
  const root = bel`<div></div>`;
  const component = MDCRipple.attachTo(root);
  assert.isOk(component instanceof MDCRipple);
});

test('attachTo makes ripple unbounded when given as an option', () => {
  const root = bel`<div></div>`;
  const component = MDCRipple.attachTo(root, {isUnbounded: true});
  assert.isOk(component.unbounded);
});

test('attachTo does not override unbounded data attr when omitted', () => {
  const root = bel`<div data-mdc-ripple-is-unbounded></div>`;
  const component = MDCRipple.attachTo(root);
  assert.isOk(component.unbounded);
});

test('attachTo overrides unbounded data attr when explicitly specified', () => {
  const root = bel`<div data-mdc-ripple-is-unbounded></div>`;
  const component = MDCRipple.attachTo(root, {isUnbounded: false});
  assert.isNotOk(component.unbounded);
});

test('createAdapter() returns the same adapter used by default for the ripple', () => {
  const root = bel`<div></div>`;
  const component = MDCRipple.attachTo(root);
  assert.deepEqual(Object.keys(MDCRipple.createAdapter()), Object.keys(component.foundation_.adapter_));
});

function setupTest() {
  const root = bel`<div></div>`;
  const component = new MDCRipple(root);
  return {root, component};
}

test(`set unbounded() adds ${cssClasses.UNBOUNDED} when truthy`, () => {
  const {root, component} = setupTest();
  component.unbounded = true;
  assert.isOk(root.classList.contains(cssClasses.UNBOUNDED));
});

test(`set unbounded() removes ${cssClasses.UNBOUNDED} when falsy`, () => {
  const {root, component} = setupTest();
  root.classList.add(cssClasses.UNBOUNDED);
  component.unbounded = false;
  assert.isNotOk(root.classList.contains(cssClasses.UNBOUNDED));
});

test('activate() delegates to the foundation', () => {
  const {component} = setupTest();
  component.foundation_.activate = td.function();
  component.activate();
  td.verify(component.foundation_.activate());
});

test('deactivate() delegates to the foundation', () => {
  const {component} = setupTest();
  component.foundation_.deactivate = td.function();
  component.deactivate();
  td.verify(component.foundation_.deactivate());
});

test('layout() delegates to the foundation', () => {
  const {component} = setupTest();
  component.foundation_.layout = td.function();
  component.layout();
  td.verify(component.foundation_.layout());
});

test('adapter#browserSupportsCssVars delegates to util', () => {
  const {component} = setupTest();
  assert.equal(
    component.getDefaultFoundation().adapter_.browserSupportsCssVars(window),
    util.supportsCssVariables(window)
  );
});

test('adapter#isUnbounded delegates to unbounded getter', () => {
  const {component} = setupTest();
  component.unbounded = true;
  assert.isOk(component.getDefaultFoundation().adapter_.isUnbounded());
});

test('adapter#isSurfaceDisabled delegates to component\'s disabled getter', () => {
  const {component} = setupTest();
  component.disabled = true;
  assert.isTrue(component.getDefaultFoundation().adapter_.isSurfaceDisabled());
});

test('adapter#addClass adds a class to the root', () => {
  const {root, component} = setupTest();
  component.getDefaultFoundation().adapter_.addClass('foo');
  assert.isOk(root.classList.contains('foo'));
});

test('adapter#removeClass removes a class from the root', () => {
  const {root, component} = setupTest();
  root.classList.add('foo');
  component.getDefaultFoundation().adapter_.removeClass('foo');
  assert.isNotOk(root.classList.contains('foo'));
});

test('adapter#containsEventTarget returns true if the passed element is a descendant of the root element', () => {
  const {root, component} = setupTest();
  const child = bel`<div></div>`;
  const notChild = bel`<div></div>`;
  root.appendChild(child);
  assert.isTrue(component.getDefaultFoundation().adapter_.containsEventTarget(child));
  assert.isFalse(component.getDefaultFoundation().adapter_.containsEventTarget(notChild));
});

test('adapter#registerInteractionHandler proxies to addEventListener on the root element', () => {
  const {root, component} = setupTest();
  const handler = td.func('interactionHandler');
  component.getDefaultFoundation().adapter_.registerInteractionHandler('foo', handler);
  domEvents.emit(root, 'foo');
  td.verify(handler(td.matchers.anything()));
});

test('adapter#deregisterInteractionHandler proxies to removeEventListener on the root element', () => {
  const {root, component} = setupTest();
  const handler = td.func('interactionHandler');
  root.addEventListener('foo', handler);
  component.getDefaultFoundation().adapter_.deregisterInteractionHandler('foo', handler);
  domEvents.emit(root, 'foo');
  td.verify(handler(td.matchers.anything()), {times: 0});
});

test('adapter#registerDocumentInteractionHandler proxies to addEventListener on the documentElement', () => {
  const {component} = setupTest();
  const handler = td.func('interactionHandler');
  component.getDefaultFoundation().adapter_.registerDocumentInteractionHandler('foo', handler);
  domEvents.emit(document.documentElement, 'foo');
  td.verify(handler(td.matchers.anything()));
});

test('adapter#deregisterDocumentInteractionHandler proxies to removeEventListener on the documentElement', () => {
  const {root, component} = setupTest();
  const handler = td.func('interactionHandler');
  root.addEventListener('foo', handler);
  component.getDefaultFoundation().adapter_.deregisterDocumentInteractionHandler('foo', handler);
  domEvents.emit(document.documentElement, 'foo');
  td.verify(handler(td.matchers.anything()), {times: 0});
});

test('adapter#registerResizeHandler uses the handler as a window resize listener', () => {
  const {component} = setupTest();
  const handler = td.func('resizeHandler');
  component.getDefaultFoundation().adapter_.registerResizeHandler(handler);
  domEvents.emit(window, 'resize');
  td.verify(handler(td.matchers.anything()));
  window.removeEventListener('resize', handler);
});

test('adapter#deregisterResizeHandler unlistens the handler for window resize', () => {
  const {component} = setupTest();
  const handler = td.func('resizeHandler');
  window.addEventListener('resize', handler);
  component.getDefaultFoundation().adapter_.deregisterResizeHandler(handler);
  domEvents.emit(window, 'resize');
  td.verify(handler(td.matchers.anything()), {times: 0});
  // Just to be safe
  window.removeEventListener('resize', handler);
});

if (util.supportsCssVariables(window)) {
  test('adapter#updateCssVariable calls setProperty on root style with varName and value', () => {
    const {root, component} = setupTest();
    component.getDefaultFoundation().adapter_.updateCssVariable('--foo', 'red');
    assert.equal(root.style.getPropertyValue('--foo'), 'red');
  });
}

test('adapter#computeBoundingRect calls getBoundingClientRect() on root', () => {
  const {root, component} = setupTest();
  document.body.appendChild(root);
  assert.deepEqual(component.getDefaultFoundation().adapter_.computeBoundingRect(), root.getBoundingClientRect());
  document.body.removeChild(root);
});

test('adapter#getWindowPageOffset returns page{X,Y}Offset as {x,y} respectively', () => {
  const {component} = setupTest();
  assert.deepEqual(component.getDefaultFoundation().adapter_.getWindowPageOffset(), {
    x: window.pageXOffset,
    y: window.pageYOffset,
  });
});

test(`handleFocus() adds class ${cssClasses.BG_FOCUSED}`, () => {
  const clock = installClock();
  const {root, component} = setupTest();
  component.foundation_.handleFocus();
  clock.runToFrame();
  assert.isTrue(root.classList.contains(cssClasses.BG_FOCUSED));
});

test(`handleBlur() removes class ${cssClasses.BG_FOCUSED}`, () => {
  const clock = installClock();
  const {root, component} = setupTest();
  root.classList.add(cssClasses.BG_FOCUSED);
  component.foundation_.handleBlur();
  clock.runToFrame();
  assert.isFalse(root.classList.contains(cssClasses.BG_FOCUSED));
});
