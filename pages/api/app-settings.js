import serverAuth from '@/lib/serverAuth';
import { db } from '@/lib/db';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const settings = await db.appSettings.findFirst();
      return res.status(200).json(settings ?? {});
    } catch (e) {
      return res.status(500).json({ message: 'Failed to fetch settings' });
    }
  }

  if (req.method === 'PUT') {
    try {
      const { currentUser } = await serverAuth(req, res);
      if (!currentUser?.admin) {
        return res.status(403).json({ message: 'Forbidden' });
      }
      const { rootHandle, rootEnabled } = req.body ?? {};
      const existing = await db.appSettings.findFirst();
      let updated;
      if (existing?.id) {
        updated = await db.appSettings.update({
          where: { id: existing.id },
          data: { rootHandle, rootEnabled },
        });
      } else {
        updated = await db.appSettings.create({
          data: { rootHandle, rootEnabled },
        });
      }
      return res.status(200).json(updated);
    } catch (e) {
      return res.status(500).json({ message: 'Failed to update settings' });
    }
  }

  return res.status(405).end();
}
