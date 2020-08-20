import React from 'react';

import { QuoteCards } from './components/quote-cards'


function App({ quotes }) {

    return (
        <QuoteCards quotes={quotes}/>
    )

}

export default App;
