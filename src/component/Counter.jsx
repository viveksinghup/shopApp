import React, { useEffect, useState } from "react"

const Counter = () => {
    const [Count, setCount] = useState(0);

    const handleDecrement = (Count) => {
        setCount(Count - 1)
    }
    const handleReset = () => {
        setCount(0)
    }
    const handleIncrement = (Count) => {
        setCount(Count + 1)
    }

    useEffect(() => {}, [Count])

    return (
        <><div className="appearContent">
            <div className="col-md-4 mx-auto appearContent">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title" style={{ fontSize: '200px' }}>{Count}</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                            <button type="button" style={{ padding: '20px', marginLeft: '10px', marginRight: '10px' }} className="btn btn-warning" onClick={() => handleDecrement(Count)}>Decrement</button>
                            <button type="button" style={{ padding: '20px', marginLeft: '10px', marginRight: '10px' }} className="btn btn-danger" onClick={() => handleReset(Count)}>Reset</button>
                            <button type="button" style={{ padding: '20px', marginLeft: '10px', marginRight: '10px' }} className="btn btn-success" onClick={() => handleIncrement(Count)}>Increment</button>
                        </div>
                    </div>
                </div>
            </div>
        </div></>
    )
}


// class Counter extends Component {
//     state = {
//         counter: 0
//     }
//     handleDecrement = () => {
//         this.setState({ counter: Counter - 1 })
//     }
//     handleReset = () => {
//         this.setState({ counter: 0 })
//     }
//     handleIncrement = () => {
//         this.setState({ counter: this.state.counter + 1 })
//     }
//     render() {
//         return (
//             <>
//                 <div className="col-md-4 mx-auto appearContent">
//                     <div className="card">
//                         <div className="card-body">
//                             <h5 className="card-title" style={{fontSize: '200px'}}>{this.state.counter}</h5>
//                             <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                             <div className="btn-group" role="group" aria-label="Basic mixed styles example">
//                                 <button type="button" style={{padding: '20px', marginLeft: '10px', marginRight: '10px'}} className="btn btn-warning" onClick={this.handleDecrement}>Decrement</button>
//                                 <button type="button" style={{padding: '20px', marginLeft: '10px', marginRight: '10px'}} className="btn btn-danger" onClick={this.handleReset}>Reset</button>
//                                 <button type="button" style={{padding: '20px', marginLeft: '10px', marginRight: '10px'}} className="btn btn-success" onClick={this.handleIncrement}>Increment</button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </>
//         )
//     }
// }

export default Counter;