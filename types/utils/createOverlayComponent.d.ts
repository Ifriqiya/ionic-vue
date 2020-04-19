import { FunctionalComponent } from 'vue';
export interface OverlayElement extends HTMLElement {
    present: () => Promise<void>;
    dismiss: (...args: any) => Promise<boolean>;
}
export interface OverlayProps {
    isOpen?: boolean;
    modelValue?: boolean;
}
export declare enum OverlayEvents {
    onWillPresent = "onWillPresent",
    onDidPresent = "onDidPresent",
    onWillDismiss = "onWillDismiss",
    onDidDismiss = "onDidDismiss",
    onUpdate = "update:modelValue"
}
export declare enum OverlayType {
    Modal = "IonModal",
    ActionSheet = "IonActionSheet",
    Popover = "IonPopover"
}
export declare function createOverlay<T extends OverlayElement, K>(name: OverlayType, controller: {
    create: (opts: any) => Promise<T>;
}): FunctionalComponent<OverlayProps & Pick<K, Exclude<keyof K, "component" | "componentProps" | "delegate">>, OverlayEvents[]>;
//# sourceMappingURL=createOverlayComponent.d.ts.map