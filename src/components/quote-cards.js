import React from 'react';

export function QuoteCards( {quotes, searchValue} ) {
    //filterd Quotes Array
    const filteredQuotes = quotes.filter(entry =>
        entry.en.includes(searchValue))
    return (
            <div className="ui cards">
                {filteredQuotes.map((entry) =>
                    <div key={entry.id} className="ui card">
                        <div className="content">
                            <div className="header">{entry.en}</div>
                            <div className="description">
                                <p>{entry.author}</p>
                            </div>
                        </div>
                    </div>
                )
                }
            </div>
    )
}