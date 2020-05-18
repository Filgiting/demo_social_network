import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
    test("status the state!)", () => {
        const component = create(<ProfileStatus status="SUBSCRIBE STATUS" />);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("SUBSCRIBE STATUS");
    });

    test("to be null)", () => {
        const component = create(<ProfileStatus status="SUBSCRIBE STATUS" />);
        const root = component.root;
        let span = root.findByType("span");
        expect(span).not.toBeNull();
    });

    test("creation span)", () => {
        const component = create(<ProfileStatus status="SUBSCRIBE STATUS" />);
        const root = component.root;

        expect(() => {
            let input = root.findByType("input");
        }).toThrow();
    });

    test("click span editMode)", () => {
        const component = create(<ProfileStatus status="SUBSCRIBE STATUS" />);
        const root = component.root;
        let span = root.findByType("span");
        span.props.onDoubleClick();
        let input = root.findByType("input");
        expect(input.props.value).toBe("SUBSCRIBE STATUS");
    });

    test("callback should be called)", () => {
        const mockCallback = jest.fn();
        const component = create(<ProfileStatus status="SUBSCRIBE STATUS" updateStatus={mockCallback} />);
        const instance = component.getInstance();
        instance.deactivateEditMode();
        expect(mockCallback.mock.calls.length).toBe(1);
    });
});