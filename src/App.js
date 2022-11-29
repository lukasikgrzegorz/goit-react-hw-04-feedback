import React, { useState } from "react";
import Statisctics from "./Components/Statistics/Statistics";
import FeedbackOptions from "./Components/FeedbackOptions/FeedbackOptions";
import Section from "./Components/Section/Section";
import Notification from "./Components/Notification/Notification";
import "./index.css";

const App = () => {
	const [good, setGood] = useState(0);
	const [neutral, setNautral] = useState(0);
	const [bad, setBad] = useState(0);

	const handleFeedback = (e) => {
		const { name } = e.target;
		name === "good" && setGood(good + 1);
		name === "neutral" && setNautral(neutral + 1);
		name === "bad" && setBad(bad + 1);
	};

	const countTotalFeedback = () => {
		return good + neutral + bad;
	};

	const countPositiveFeedbackPercentage = () => {
		return Math.round((good / (good + neutral + bad)) * 100);
	};

	const total = countTotalFeedback();
	const positivePercentage = countPositiveFeedbackPercentage();

	return (
		<>
			<Section title={"Please leave feedback"}>
				<FeedbackOptions options={["good", "bad", "neutral"]} onLeaveFeedback={handleFeedback} />
			</Section>
			<Section title={"Statistics"}>
				{total ? (
					<Statisctics
						good={good}
						neutral={neutral}
						bad={bad}
						total={total}
						positivePercentage={positivePercentage}
					/>
				) : (
					<Notification message={"There is no feedback"} />
				)}
			</Section>
		</>
	);
};

export default App;
