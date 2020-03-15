import { Fragment } from "@servicenow/ui-renderer-snabbdom";

const renderAttributes = attributes => (
	<dl slot="attr">
		{attributes.map(attr => (
			<Fragment>
				<dt>
					<span>{attr.title}</span>
				</dt>
				<dd>{attr.description}</dd>
			</Fragment>
		))}
	</dl>
);

export default ({ cards }) => (
	<div>
		<div className="card-list">
			{cards.map(card => (
				<sn-flash-card>
					<span slot="title">{card.title}</span>
					<span slot="desc">{card.description}</span>
					{card.attributes &&
						card.attributes.length &&
						renderAttributes(card.attributes)}
				</sn-flash-card>
			))}
		</div>
	</div>
);
