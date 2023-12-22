import React from 'react';

const About = () => {
    return (
        <div>
            <section className="m-4 md:m-8">
	<div className="container mx-auto p-4 my-6 space-y-2 text-center">
		<h2 className="text-5xl font-bold">Task Management</h2>
		<p className="dark:text-gray-400">Simplify Your Workflow with Ease</p>
	</div>
	<div className="container mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
		<div className="flex flex-col items-center p-4">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 dark:text-green-600">
				<path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
			</svg>
			<h3 className="my-3 text-3xl font-semibold text-center">Drag & Drop</h3>
			<div className="space-y-1 leadi">
				<p>Easily manage your tasks by dragging and dropping them between different status categories – whether it's moving tasks from "To-Do" to "Ongoing" or marking them as "Complete," our intuitive drag-and-drop feature provides a visual and efficient way to organize your workload.</p>
			</div>
		</div>
		<div className="flex flex-col items-center p-4">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 dark:text-green-600">
				<path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
			</svg>
			<h3 className="my-3 text-3xl font-semibold">Create Task</h3>
			<div className="space-y-1 leadi">
				<p>Seamlessly create new tasks with our user-friendly interface. Whether it's a project deadline, meeting, or personal goal, our Task Management system empowers you to quickly add and prioritize tasks, ensuring nothing gets overlooked.</p>
			</div>
		</div>
		<div className="flex flex-col items-center p-4">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 dark:text-green-600">
				<path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
			</svg>
			<h3 className="my-3 text-3xl font-semibold">Profile Route</h3>
			<div className="space-y-1 leadi">
				<p>Personalize your task management experience with individual profiles. The Profile Route feature allows users to customize settings, track personal progress, and tailor the platform to suit their unique needs and preferences.</p>
			</div>
		</div>
		<div className="flex flex-col items-center p-4">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 dark:text-green-600">
				<path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
			</svg>
			<h3 className="my-3 text-3xl font-semibold">Dashboard</h3>
			<div className="space-y-1 leadi">
				<p>Gain a comprehensive overview of your tasks and projects through our interactive dashboard. Monitor progress, track deadlines, and visualize the status of each task at a glance, providing you with the insights needed to stay organized and focused.</p>
			</div>
		</div>
		<div className="flex flex-col items-center p-4">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 dark:text-green-600">
				<path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
			</svg>
			<h3 className="my-3 text-3xl font-semibold">Login System</h3>
			<div className="space-y-1 leadi">
				<p>Securely access your tasks and data with our robust login system. Protect your information and enjoy a personalized experience every time you log in, ensuring that your task management journey is both convenient and confidential.</p>
			</div>
		</div>
		<div className="flex flex-col items-center p-4">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 dark:text-green-600">
				<path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
			</svg>
			<h3 className="my-3 text-3xl font-semibold">Contact Option</h3>
			<div className="space-y-1 leadi">
				<p>Connect seamlessly with team members, collaborators, or clients through our integrated contact option. Whether you need clarification on a task or want to discuss project details, our contact feature facilitates efficient communication within the Task Management platform.</p>
			</div>
		</div>
	</div>
</section>
        </div>
    );
};

export default About;