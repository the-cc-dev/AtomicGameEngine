
import EditorUI = require("../../EditorUI");
import ModalWindow = require("../ModalWindow");

class BuildOutput extends ModalWindow {

    constructor(buildBase: ToolCore.BuildBase) {

        super();

        this.buildBase = buildBase;

        this.init("Build Output", "AtomicEditor/editor/ui/programoutput.tb.txt");

        this.outputField = <Atomic.UIEditField>this.getWidget("output");

        this.resizeToFitContent();
        this.center();

        this.subscribeToEvent(buildBase, "BuildOutput", (ev: ToolCore.BuildOutputEvent) => {

            this.textOutput += ev.text;
            this.outputField.text = this.textOutput;
            this.outputField.scrollTo(0, 0xffffff);

        });

    }

    handleWidgetEvent(ev: Atomic.UIWidgetEvent): boolean {

        if (ev.type == Atomic.UI_EVENT_TYPE_CLICK) {

            if (ev.target.id == "cancel") {
                this.hide();
                return true;
            }

            if (ev.target.id == "ok") {
                this.hide();
                return true;
            }

        }

        return false;
    }

    textOutput: string;
    buildBase: ToolCore.BuildBase;
    outputField: Atomic.UIEditField;

}

export = BuildOutput;
