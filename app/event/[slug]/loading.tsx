import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const loading = () => {
	return (
		<div className="flex justify-center gap-y-4 pt-28  max-w-7xl mx-auto">
			<Skeleton
				count={3}
				baseColor="#ffffff0d"
				highlightColor="none"
				height={16}
				containerClassName="animate-pulse"
				width={500}
				style={{ margin: "0.5rem 0" }}
			/>
		</div>
	);
};

export default loading;
