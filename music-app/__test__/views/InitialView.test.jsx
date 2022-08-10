import { screen, render } from '@testing-library/react';
import { InitialView } from '../../src/views/InitialView';
import { BrowserRouter as Router } from 'react-router-dom';


describe('Pruebas en <InitialView.jsx>', () => {

    test('Debe hacer match con el snapshot', () => {
        const { container } = render(
            <Router>
                <InitialView />
            </Router>
        );
        
        expect(container).toMatchSnapshot();
        
    });

    test('Debe de mostar el titulo "Welcome to Music App" ', () => { 
        render(
            <Router>
                <InitialView />
            </Router>
        );

        expect(screen.getByText("Welcome to Music App")).toBeTruthy();
    });
    
});