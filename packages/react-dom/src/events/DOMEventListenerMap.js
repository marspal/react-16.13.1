/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

import type {DOMTopLevelEventType} from 'legacy-events/TopLevelEventTypes';

const PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
// prettier-ignore
const elementListenerMap = new PossiblyWeakMap();

export function getListenerMapForElement(
  element
) {
  let listenerMap = elementListenerMap.get(element);
  if (listenerMap === undefined) {
    listenerMap = new Map();
    elementListenerMap.set(element, listenerMap);
  }
  return listenerMap;
}
