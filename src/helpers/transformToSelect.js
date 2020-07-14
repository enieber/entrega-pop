export default function transformToSelect(data) {
	return data.allCategory.map((_item) => ({
		value: _item.id,
		label: _item.title,
	}));
}
