import {Block, type BlockProps} from "../../framework/block.ts";

export class AvatarComponent extends Block {
    constructor(props: BlockProps) {
        super({
            ...props,
        });
    }

    override render() {
        return `
            <form>
                <div class="avatar-upload">
                    <div class="avatar-preview" id="avatarPreview">
                        <div class="avatar-placeholder">
                            Тут будет аватарка
                        </div>
                        <img id="avatarImage" src="" alt="Аватар">
                    </div>
                    <input type="file" id="avatarInput" name="avatar" class="avatar-input" accept="image/*">
                </div>
            </form>
        `;
    }
}
