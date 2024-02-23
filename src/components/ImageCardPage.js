import ImageCard from "./ImageCard";

function ImageCardPage() {
    const cardDetails = [
        { id: 1, emotion: "Happy", description: "Feeling pleased, content, or elated."},
        { id: 2, emotion: "Anger", description: "Feeling irritated, frustrated, or resentful."},
        { id: 3, emotion: "Fear", description: "Feeling afraid, anxious, or nervous about something."},
        { id: 4, emotion: "Surprise", description: "Feeling astonished, amazed, or taken aback by something unexpected."},
        { id: 5, emotion: "Sleepy", description: "Feeling sleepy and tired after a long day."},
        { id: 6, emotion: "Love", description: "Feeling affectionate, caring, or deeply attached to someone or something."},
        { id: 7, emotion: "Excitement", description: "Feeling enthusiastic, eager, or thrilled about something upcoming."},
        { id: 8, emotion: "Sadness", description: "Feeling unhappy, sorrowful, or melancholic."},
        { id: 9, emotion: "Calmness", description: "Feeling tranquil, peaceful, or at ease."},
    ]
    return (
        <div>
            {cardDetails.map((item) => (
                <ImageCard sx={{m: 5}} emotion={item.emotion} description={item.description} />
            ))}
        </div>
    )
}

export default ImageCardPage;
