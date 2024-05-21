import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Icon } from '../../../../components';

import styled from 'styled-components';

const PostCardContainer = ({
	className,
	id,
	title,
	imageUrl,
	publishedAt,
	commentsCount,
}) => {
	return (
		<div className={className}>
			<Link to={`/post/${id}`}>
				<img src={imageUrl} alt={title} />
				<div className="post-card-inner">
					<h3>{title}</h3>
					<div className="post-card-text">
						<div className="published-at">
							<Icon
								inactive={true}
								id="fa-calendar-o"
								size="18px"
								margin="0 10px 0 10px "
							/>
							{publishedAt}
						</div>
						<div className="comments-count">
							<Icon
								inactive={true}
								id="fa-comment-o"
								size="18px"
								margin="0 10px 0 10px "
							/>
							{commentsCount}
						</div>
					</div>
				</div>
			</Link>
		</div>
	);
};

export const PostCard = styled(PostCardContainer)`
	width: 280px;
	display: flex;
	flex-direction: column;
	& h3 {
		display: flex;
		align-items: start;
	}
	& .post-card-text {
		display: flex;
		justify-content: space-between;
	}
	& .published-at,
	.comments-count {
		display: flex;
	}
`;

PostCard.propType = {
	id: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	imageUrl: PropTypes.string.isRequired,
	publishedAt: PropTypes.string.isRequired,
	commentsCount: PropTypes.number.isRequired,
};
