import { mount as rendrjsmount, Elem } from '@rendrjs/core';
import events from '@testing-library/user-event';
export * as screen from '@testing-library/dom';

export const userEvent: typeof events.default = {
    setup: events.default.setup,
    clear: events.default.clear,
    click: events.default.click,
    copy: events.default.copy,
    cut: events.default.cut,
    dblClick: events.default.dblClick,
    deselectOptions: events.default.deselectOptions,
    hover: events.default.hover,
    keyboard: events.default.keyboard,
    pointer: events.default.pointer,
    paste: events.default.paste,
    selectOptions: events.default.selectOptions,
    tripleClick: events.default.tripleClick,
    type: events.default.type,
    unhover: events.default.unhover,
    upload: events.default.upload,
    tab: events.default.tab,
};

export const mount = (elem: Elem): HTMLElement => {
    const root = document.createElement('div'); 
    rendrjsmount(root, elem);
    return root;
};
