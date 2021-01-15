import React from 'react';
import styled from 'styled-components';

const Skeleton = () => {
	return (
		<SkeletonBase>
			<div className="skeleton-image" />
			<h2 />
			<h2 />
			<div className="skeleton-email" />
		</SkeletonBase>
	);
};

const SkeletonBase = styled.article`
	display: flex;
	position: relative;
	margin: 0 8rem;
	background-color: #131320;
	border-radius: 10px;
	height: 20rem;
	width: 60vw;
	.skeleton-image {
		border-radius: 50%;
		height: 150px;
		width: 150px;
		margin: 1rem;
		background-color: #7a7a7ad4;
		animation-name: loadingColor;
		animation-duration: 2s;
		animation-iteration-count: infinite;
	}

	h2 {
		height: 50px;
		width: 150px;
		background-color: #7a7a7ad4;
		margin: 3rem 1rem;
		border-radius: 15px;
		animation-name: loadingColor, loadingWidth;
		animation-duration: 2s;
		animation-iteration-count: infinite;
	}

	.skeleton-email {
		position: absolute;
		top: 50%;
		left: 20%;
		background-color: #7a7a7ad4;
		width: 250px;
		height: 40px;
		border-radius: 15px;
		animation-name: loadingColor, loadingWidth;
		animation-duration: 2s;
		animation-iteration-count: infinite;
	}

	@keyframes loadingColor {
		from {
			opacity: .1;
		}
		to {
			opacity: 1;
		}
	}

	@keyframes loadingWidth {
		from {
			width: 150px;
		}

		to {
			width: 200px;
		}
	}
`;

export default Skeleton;
