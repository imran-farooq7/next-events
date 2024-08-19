import Skeleton from "react-loading-skeleton";

const SkeletonCard = () => {
	return (
		<div>
			<Skeleton
				baseColor="#ffffff0d"
				highlightColor="none"
				height={288}
				containerClassName="animate-pulse "
				className="rounded-lg"
				width={264}
				style={{ margin: "0.5rem 0" }}
			/>
			<Skeleton
				baseColor="#ffffff0d"
				highlightColor="none"
				height={24}
				containerClassName="animate-pulse "
				width={264}
				style={{ margin: "0.5rem 0" }}
			/>
			<Skeleton
				baseColor="#ffffff0d"
				highlightColor="none"
				height={24}
				containerClassName="animate-pulse "
				width={264}
				style={{ margin: "0.5rem 0" }}
			/>
		</div>
	);
};

export default SkeletonCard;
