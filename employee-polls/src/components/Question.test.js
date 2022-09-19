import * as React from 'react';
import { render } from '@testing-library/react';
import Question from './Question.js';


describe('Question', () => {
    it('matches the snapshot when valid props are passed', () => {
        var component = render(
            <Question id={'8xf0y6ziyjabvozdd253nd'} avatar={'../pictures/profile2.png'}/>
        );
        expect(component).toMatchSnapshot();
    });

    it('matches the snapshot when nothing is passed to props', () => {
        var component = render(
            <Question />
        );
        expect(component).toMatchSnapshot();
    });
});