import { screen, render } from '@testing-library/react';
import { AlbumCard } from '../../src/components/AlbumCard';
import { BrowserRouter as Router } from 'react-router-dom';


describe('Pruebas en el componente <AlbumCard />', () => {
    
    const artistName = 'Elvis'; 
    const artworkUrl100 = 'Elvis_Image.jp';
    const collectionName = 'Elvis Collection';

    test('Debe de hacer match con el snapshot ', () => {
        const { container } = render(
            <Router>
                <AlbumCard
                    artistName={artistName}
                    artworkUrl100={artworkUrl100}
                    collectionName={collectionName}
                />
            </Router>
        );
        
        expect(container).toMatchSnapshot();

    });

    test('Debe de mostrar el "collectionName" en un h5', () => {
        const { getByTestId } = render(
            <Router>
                <AlbumCard
                    artistName={artistName}
                    artworkUrl100={artworkUrl100}
                    collectionName={collectionName}
                />
            </Router>
        );

        expect(getByTestId('test-collectionName').innerHTML).toBe(collectionName);
    });
    
    test('Debe de mostrar el "artistName"', () => {
        render(
            <Router>
                <AlbumCard
                    artistName={artistName}
                    artworkUrl100={artworkUrl100}
                    collectionName={collectionName}
                />
            </Router>
        );
       
        expect(screen.getByText(artistName)).toBeTruthy();
    });


})
