// Einstellungen der Webseite. Nur diese Datei musst du anpassen.
window.VIENI = {
  // Android-App (APK). Lädst du die Datei bei GitHub unter "Releases" als vieni.apk hoch,
  // zeigt dieser Link immer automatisch auf die neueste Version.
  androidApk: 'https://github.com/vieniapp/vieniapp.github.io/releases/latest/download/vieni.apk',

  // Sobald es Vieni in den Stores gibt, hier die Links eintragen. Dann verschwindet die Warteliste
  // und die Knöpfe führen direkt in den Store.
  appStore: '',
  playStore: '',

  // Für die Warteliste: dieselben Werte wie EXPO_PUBLIC_SUPABASE_URL und _ANON_KEY in .env.
  // Der anon key ist öffentlich und darf hier stehen; die Datenbank erlaubt damit nur das Eintragen.
  supabaseUrl: 'https://hfqyhwkivhmvniwnaypp.supabase.co',
  supabaseAnonKey: 'sb_publishable_oAOwAB8HnTT5jqzE-jGKCg_G8C3_ByH',
};
