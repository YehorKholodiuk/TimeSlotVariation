function DropDownTimes(props) { // {id, text, enabled}, {id, text, enabled}, {id, text, enabled}, {id, text, enabled} | 3, 4
    let slots = [{id: 0, text: "8:00-8:30", available: true}, {id: 1, text: "8:30-9:00", available: true}, {
        id: 2,
        text: "9:30-10:00",
        available: true
    }]
    const times = props.times;

    slots = slots.map(value => {
        if (times.includes(value.id)) {
            return {...value, available:false}
        } else {
            return value;
        }
    })

    return (
        <div>
            <select>
                {slots.map(slot => {
                    return (
                        <option disabled={!slot.available}>{slot.text}</option>
                    )
                })}
            </select>
        </div>
    );
}

export default DropDownTimes;