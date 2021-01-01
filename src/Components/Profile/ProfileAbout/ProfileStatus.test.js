import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe(" ProfileStatus testing", () => {
    test("status in props", () => {
        const component = create(<ProfileStatus status="artem" />);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("artem");
    });
    test("change span to input", () => {
        const component = create(<ProfileStatus status="artem" />);
        const root = component.root;
        let span = root.findByType('span')
        expect(span).not.toBeNull();
    });
    test("input don't displaying", () => {
        const component = create(<ProfileStatus status="artem" />);
        const root = component.root;

        expect(() => {
            let input = root.findByType('input');
        }).toThrow()
    });
    test("span text", () => {
        const component = create(<ProfileStatus status="artem" />);
        const root = component.root;
        let span = root.findByType('span');
        expect(span.children[0]).toBe('artem')
    });
    test("change edit mode", () => {
        const component = create(<ProfileStatus status="artem" />);
        const root = component.root;
        let span = root.findByType('span');
        span.props.onDoubleClick();
        let input = root.findByType('input');
        expect(input.props.value).toBe('artem')
    });
    test("callback called", () => {
        const mockCall = jest.fn();
        const component = create(<ProfileStatus status="artem" updateStatus={mockCall} />);
        const instance = component.getInstance();
        instance.deactivateEditMode();
        expect(mockCall.mock.calls.length).toBe(1);
    });
});