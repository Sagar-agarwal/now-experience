export default () => (
	<div className="card">
		<summary>
			<span className="card-title">
				<slot name="title"></slot>
				<slot name="desc"></slot>
			</span>
		</summary>
		<div className="card-attributes">
			<h4>
				<span>Attributes</span>
			</h4>
			<slot name="attr">
				<p>None</p>
			</slot>
		</div>
	</div>
);
