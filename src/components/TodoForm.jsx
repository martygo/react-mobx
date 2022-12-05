import { action } from "mobx";
import { useStore } from "../store";

const TodoForm = () => {
	const { stories } = useStore();

	const handleSubmit = action((e) => {
		e.preventDefault();

		const formData = new FormData(e.target);
		const value = formData.get("title").toString() || "";

		stories.list.push({
			title: value,
			id: Date.now(),
		});
	});

	return (
		<form onSubmit={handleSubmit}>
			<input name="title" placeholder="add text" />
			<button>Add</button>
		</form>
	);
};

export { TodoForm };
