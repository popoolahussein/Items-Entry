import { nanoid } from 'nanoid'; //? Import nanoid for unique ID generation

export default class ListItem {
    constructor(
        private _id: string = nanoid(), //? Generate a unique ID if not provided
        private _item: string = '',
        private _checked: boolean = false,
    ) {}

    get id(): string {
        return this._id;
    }

    set id(id: string) {
        this._id = id;
    }

    get item(): string {
        return this._item;
    }

    set item(item: string) {
        this._item = item;
    }

    get checked(): boolean {
        return this._checked;
    }

    set checked(checked: boolean) {
        this._checked = checked;
    }
}
