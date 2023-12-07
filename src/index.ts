import { mount as rendrjsmount, Elem } from '@rendrjs/core';
import events from '@testing-library/user-event';

export * from '@testing-library/dom';

export const setup =  events.setup;
export const clear = events.clear;
export const click = events.click;
export const copy = events.copy;
export const cut = events.cut;
export const dblClick = events.dblClick;
export const deselectOptions = events.deselectOptions;
export const hover = events.hover;
export const keyboard = events.keyboard;
export const pointer = events.pointer;
export const paste = events.paste;
export const selectOptions = events.selectOptions;
export const tripleClick = events.tripleClick;
export const type = events.type;
export const unhover = events.unhover;
export const upload = events.upload;
export const tab = events.tab;

export const mount = (elem: Elem): HTMLElement => {
    const root = document.createElement('div'); 
    rendrjsmount(root, elem);
    return root;
};
