import React from 'react';


function App({ quotes }) {

    return (
        <div className="ui container">
            <div className="ui cards">
                {quotes.map((entry) =>
                    <div key={entry.id} className="ui card">
                        <div className="content">
                            <div className="header">{entry.en}</div>
                            <div className="description">
                                <p>{entry.author}</p>
                            </div>
                        </div>
                        <div className="extra">
                            Rating:
                            <div className="ui star rating" data-rating={Math.round(entry.rating)}></div>
                        </div>
                    </div>
                )
                }
            </div>
        </div>
    )


}

export default App;
