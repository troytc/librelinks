import Layout from '@/components/layout/Layout';
import Head from 'next/head';
import Link from 'next/link';
import { Shield, ExternalLink } from 'lucide-react';

const AdminPanel = () => {
	return (
		<>
			<Head>
				<title>Librelinks | Admin Panel</title>
			</Head>
			<Layout>
				<div className="w-full lg:basis-3/5 pl-4 pr-4 border-r overflow-auto">
					<div className="max-w-[690px] mx-auto my-10">
						<div className="flex items-center gap-2 mb-4">
							<Shield size={20} />
							<h3 className="text-xl font-semibold">Admin Panel</h3>
						</div>
						<div className="grid grid-cols-1 gap-4">
							<Link href="/admin/settings#root-profile" className="group border rounded-lg p-4 bg-white hover:bg-gray-50">
								<div className="flex items-center justify-between">
									<div>
										<h4 className="font-semibold">Root Profile Setting</h4>
										<p className="text-sm text-gray-600">Set a specific profile to show on the root URL</p>
									</div>
									<ExternalLink className="opacity-0 group-hover:opacity-100 transition-opacity" size={18} />
								</div>
							</Link>
						</div>
					</div>
				</div>
			</Layout>
		</>
	);
};

export default AdminPanel;