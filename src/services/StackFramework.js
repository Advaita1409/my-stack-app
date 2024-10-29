export default class StackFramework {
    constructor() {
    this.items = [];
    this.state = [];
    }

    async fetchData() {
    const response = await fetch('API_ENDPOINT');
    this.items = await response.json();
    this.state = new Array(this.items.length).fill(false);
    }

    toggleItemState(index) {
    this.state = this.state.map((_, i) => (i === index ? !this.state[i] : false));
    }

    renderItem(index) {
    const item = this.items[index];
    const isExpanded = this.state[index];

    return isExpanded ? (
        <ExpandedView key={index} item={item} />
    ) : (
        <CollapsedView key={index} item={item} onToggle={() => this.toggleItemState(index)} />
    );
    }

    render() {
    return (
        <div className="flex flex-col gap-4">
        {this.items.slice(0, 4).map((_, index) => this.renderItem(index))}
        </div>
    );
    }
}