import React, {useState} from 'react'
import {Checkbox, Collapse} from 'antd'

const {Panel} = Collapse

const dietFilters = [
    {
        "id": 1,
        "name": "Halal"
    },
    {
        "id": 2,
        "name": "Vegetarian"
    },
    {

        "id": 3,
        "name": "Gluten free"
    }
]

function CheckBox(props) {

    const [Checked, setChecked] = useState([])
    const handleToggle = (value) => {
        const currentIndex = Checked.indexOf(value);
        const newChecked = [...Checked];
        
        if(currentIndex ===-1){
            newChecked.push(value)
        }else{
            newChecked.splice(currentIndex, 1)
        }

        setChecked(newChecked)
        props.handleFilter(newChecked)
    
    

    // }
    return (
        <div>
            <Collapse defaultActiveKey = {['0']} >
                <Panel header key = "1">
                    {dietFilters.map((value, index) =>(
                        <React.Fragment key = {index}>
                            <Checkbox
                                onChange ={() => handleToggle(value.id)}
                                // onChange
                                type ="checkbox"
                                checked 
                                />
                                <span>{value.name}</span>
                                </React.Fragment>
                    ))}
                </Panel>
            </Collapse>
        </div>
    )}
}

export default CheckBox;
