import { observer } from "mobx-react-lite";
import { useStore } from "../store";

const TodoList = () => {
	const { stories } = useStore();

	return (
		<li>
			{stories.list.map((l) => (
				<h3 key={l.id}>{l.title}</h3>
			))}
		</li>
	);
};

export default observer(TodoList);
