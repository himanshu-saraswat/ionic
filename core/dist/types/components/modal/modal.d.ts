import '../../stencil.core';
import { ComponentInterface, EventEmitter } from '../../stencil.core';
import { Animation, AnimationBuilder, ComponentProps, ComponentRef, Config, FrameworkDelegate, Mode, OverlayEventDetail, OverlayInterface } from '../../interface';
export declare class Modal implements ComponentInterface, OverlayInterface {
    private usersElement?;
    presented: boolean;
    animation: Animation | undefined;
    el: HTMLElement;
    config: Config;
    /** @internal */
    overlayIndex: number;
    /** @internal */
    delegate?: FrameworkDelegate;
    /**
     * The mode determines which platform styles to use.
     */
    mode: Mode;
    /**
     * If `true`, the keyboard will be automatically dismissed when the overlay is presented.
     */
    keyboardClose: boolean;
    /**
     * Animation to use when the modal is presented.
     */
    enterAnimation?: AnimationBuilder;
    /**
     * Animation to use when the modal is dismissed.
     */
    leaveAnimation?: AnimationBuilder;
    /**
     * The component to display inside of the modal.
     */
    component: ComponentRef;
    /**
     * The data to pass to the modal component.
     */
    componentProps?: ComponentProps;
    /**
     * Additional classes to apply for custom CSS. If multiple classes are
     * provided they should be separated by spaces.
     */
    cssClass?: string | string[];
    /**
     * If `true`, the modal will be dismissed when the backdrop is clicked.
     */
    backdropDismiss: boolean;
    /**
     * If `true`, a backdrop will be displayed behind the modal.
     */
    showBackdrop: boolean;
    /**
     * If `true`, the modal will animate.
     */
    animated: boolean;
    /**
     * Emitted after the modal has presented.
     */
    didPresent: EventEmitter<void>;
    /**
     * Emitted before the modal has presented.
     */
    willPresent: EventEmitter<void>;
    /**
     * Emitted before the modal has dismissed.
     */
    willDismiss: EventEmitter<OverlayEventDetail>;
    /**
     * Emitted after the modal has dismissed.
     */
    didDismiss: EventEmitter<OverlayEventDetail>;
    protected onDismiss(ev: UIEvent): void;
    protected onBackdropTap(): void;
    protected lifecycle(modalEvent: CustomEvent): void;
    /**
     * Present the modal overlay after it has been created.
     */
    present(): Promise<void>;
    /**
     * Dismiss the modal overlay after it has been presented.
     */
    dismiss(data?: any, role?: string): Promise<boolean>;
    /**
     * Returns a promise that resolves when the modal did dismiss.
     *
     */
    onDidDismiss(): Promise<OverlayEventDetail>;
    /**
     * Returns a promise that resolves when the modal will dismiss.
     *
     */
    onWillDismiss(): Promise<OverlayEventDetail>;
    hostData(): {
        'no-router': boolean;
        'aria-modal': string;
        class: {
            [x: string]: boolean;
        };
        style: {
            zIndex: number;
        };
    };
    render(): JSX.Element[];
}
