import Card from 'react-bootstrap/Card';
import './YourActionsLeft.css';

type Props = {
    name: string;
    desc: string[];
    actionId: string;
};

function YourActionsLeft(props: Props){
    return (
        <Card className="your-actions-left" id={props.actionId}>
            <Card.Body id={"body-" + props.actionId}>
                <Card.Title className="title">{props.name}</Card.Title>
                <Card.Text className="text">
                    <ul>
                        {
                            props.desc.map((item,index)=>{
                                return <li key={index}>{item}</li>
                            })
                        }
                    </ul>
                </Card.Text>
            </Card.Body>
            <Card.Img id={"image-" + props.actionId} />    {/* image url in css */}
        </Card>
    )
}

export default YourActionsLeft;