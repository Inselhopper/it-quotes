import React, {Fragment, useState} from 'react';

import { QuoteCards } from './components/quote-cards'
import { Search } from './components/search'


function App({ quotes }) {
    const [searchValue, setSearchValue] = useState("");
    return (
        <Fragment>
            <div className="ui container">
                <Search searchValue={searchValue} setSearchValue={setSearchValue}/>
                <QuoteCards quotes={quotes} searchValue={searchValue}/>
            </div>
        </Fragment>
    )

}

export default App;
