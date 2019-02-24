class TextInformation {
    private _text1: Information = null;
    private _text2: Information = null;
    private _text3: Information = null;

    public get text1(): Information {
        return this._text1;
    }

    public set text1(value: Information) {
        this._text1 = value;
    }
    public get text2(): Information {
        return this._text2;
    }

    public set text2(value: Information) {
        this._text2 = value;
    }
    public get text3(): Information {
        return this._text3;
    }

    public set text3(value: Information) {
        this._text3 = value;
    }
}