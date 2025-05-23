export default function NotificationsDialog() {
  return (
    <div className="absolute left-60 top-44 z-50 bg-white shadow-lg border-2 border-gray-200 rounded-lg w-[480px] max-h-[280px] overflow-y-auto py-5">
      <div className="p-4 text-sm">
        <h4 className="font-semibold mb-2">Notifications</h4>
        <ul className="space-y-2">
          {Array.from({ length: 20 }).map((_, i) => (
            <li key={i} className=" py-2">
              Notification {i + 1}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
