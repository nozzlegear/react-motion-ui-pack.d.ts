declare module "react-motion-ui-pack" {
    import * as React from "react";
    import { OpaqueConfig } from "react-motion";

    export interface Transition extends React.CSSProperties {
        translateX?: number | OpaqueConfig;
        translateY?: number | OpaqueConfig;
    }

    export interface TransitionProps extends React.Props<any> {
        /**
         * Define the wrapping tag/component around the children passed in, pass false to not use a wrapping component at all for only child components.
         */
        component: string | false;
        /**
         * Determines whether the animation runs on mount or not.
         */
        runOnMount: boolean;
        /**
         * Where the animation starts. Defaults to the `leave` value if nothing passed.
         */
        appear?: Transition;
        /**
         * Where the animation ends after an element is unmounted.
         */
        leave?: Transition;
        /**
         * Callback right before an element leaves. Passes in your current animation values. Called multiple times.
         */
        onEnter?: (currentValues) => void;
        /**
         * Callback right before an element enters. Passes in your current animation values. Only called once.
         */
        onLeave?: (currentValues) => void;
        /**
         * The resting state of the animation, i.e. where it ends after an element is mounted.
         */
        enter: Transition;
    }

    export default class TransitionComponent extends React.Component<TransitionProps, any> {

    }
}