import React from 'react';

const TargetAudience = () => {
	return (
		<div>
			<section className="py-10">
				<div className="container flex flex-col justify-center p-4 mx-auto md:p-8" >
					<p className="p-2 text-sm font-medium tracki text-center uppercase"> whom this can be of benefit</p>
					<h2 className="mb-12 text-4xl font-bold leadi text-center sm:text-5xl">Target Audience and Benefits</h2>
					<div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32" >
						<div >
							<h3 className="font-semibold">Developers</h3>
							<p className="mt-1 text-gray-500">Developers can easily prioritize and manage their coding tasks. With the drag-and-drop feature, they can swiftly move tasks between "To-Do," "Ongoing," and "Completed" lists, ensuring a visual and efficient way to track progress and manage project milestones.</p>
						</div>
						<div >
							<h3 className="font-semibold">Corporate Professionals</h3>
							<p className="mt-1 text-gray-500">For busy corporate professionals, the drag-and-drop functionality simplifies task management. Assignments can be effortlessly moved through different stages, allowing professionals to visually track their workflow and prioritize tasks in real-time.</p>
						</div>
						<div >
							<h3 className="font-semibold">Bankers and Finance Professionals</h3>
							<p className="mt-1 text-gray-500">Finance professionals can streamline their workflow by dragging tasks between lists. This feature aids in managing financial activities, ensuring that tasks progress seamlessly from planning to execution, and finally, completion</p>
						</div>
						<div >
							<h3 className="font-semibold">Students</h3>
							<p className="mt-1 text-gray-500">Students can visually organize their study tasks. Assignments and projects can be easily moved between lists as they progress, providing a clear overview of pending and completed tasks. This method enhances time management and study planning.</p>
						</div>
					</div>
				</div>

				<h3 className='text-2xl text-center'>And Many More....</h3>
			</section>
		</div>
	);
};

export default TargetAudience;