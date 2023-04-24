import './ExpenseItems.css'


function ExpenseItems(props){
    const month = props.date.toLocaleString('en-us',{month:'long'});
    const day = props.date.toLocaleString('en-us',{day:'2-digit'});
    const year = props.date.getFullYear();
 
return(
    <section className='expense-item'>

        <div>
            <div>{month}</div>
            <div>{day}</div>
            <div>{year}</div>
           
        </div>
        <div className='expense-item__description'>
            <h2>{props.title}</h2>
        </div>
        <div className='expense-item__price'>
            {props.amount}
        </div>

    </section>
)

}

export default ExpenseItems;