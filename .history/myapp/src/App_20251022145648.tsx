import { useState } from "react";
import "./App.css";

function App() {
    const [users, setUsers] = useState([
      { id: 1, name: "Murad", scores: [10, 20, 30], city: "Baku" },
      { id: 2, name: "Aysel", scores: [15, 25, 35], city: "Ganja" },
      { id: 3, name: "Elvin", scores: [12, 22, 32], city: "Sumqayit" },
      { id: 4, name: "Leyla", scores: [18, 28, 38], city: "Shaki" },
      { id: 5, name: "Ramin", scores: [14, 24, 34], city: "Quba" },
    ]);

  let cost = 50;
  const change = users.map((u) => (
    { ...u, money: 200 + cost + index * 50 }
  ));

  console.log(change);

  return (
    <div>
      {users.map((u) => (
        <div className="flex gap-5" key={u.id}>
          <p>{u.name}</p>
          <p>{u.city}</p>
          <div>
            {u.scores.map((sc, index) => (
              <span key={index}>{sc} </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;

//type inteface ve usesate ile deyisen ferqi

// https://www.youtube.com/watch?v=jex--OwVycc

//type

//bir kompoenetde digerin kecme react native de var idi ona bax

// Task: Color Sequence Game

// Məqsəd: İstifadəçi ekranda 4 rəngli kvadrat görür və onun ardıcıllığını yadda saxlayıb təkrar etməlidir.
//  Sistem hər dəfə rəngləri dəyişir. Logic və yaddaş üzərində işləyir, CRUD və search yoxdur.

// Requirements / Tələblər

// Ekranda 4 kvadrat göstərilsin (rəngləri dəyişə bilən, məsələn: qırmızı, yaşıl, mavi, sarı).

// Sistem random bir sıra yaratsın, məsələn: [qırmızı, mavi, yaşıl, sarı].

// İstifadəçi kvadratları düzgün ardıcıllıqla klikləməlidir.

// Əgər ardıcıllıq düzgün deyilsə → “Xəta!” mesajı çıxsın, və sıra yenidən göstərilsin.

// Əgər ardıcıllıq düzgündürsə → “Təbriklər! Növbəti səviyyə” və yeni random sıra.

// Hər səviyyədə sıra 1 element artacaq (Level 1 → 4 rəng, Level 2 → 5 rəng …).

// Logic-focus

// React state ilə random sequence yaratmaq

// İstifadəçinin klikləri ilə ardıcıllığı yoxlamaq

// Hər səhvdə və uğurda state update

// Extra (optional)

// Timer əlavə edib “sıra x saniyə ərzində təkrarlanmalıdır”

// Highscore logic əlavə edin (amma sadəcə logic, CRUD yox)

// Cinema Seat Booking Checker – Task Addımları

// HTML-də kino zalını göstər: 5 sıra × 10 oturacaq.

// JS-də 2D array yaradıb bütün oturacaqları “boş” kimi təyin et.

// HTML-də hər seat üçün kliklənə bilən element yarat.

// Kliklənən seat “seçilmiş” kimi işarələnir.

// “Book” düyməsi əlavə et.

// “Book” düyməsinə kliklənəndə seçilmiş seat-ları 2D array-də “tutulmuş” kimi işarələ.

// Əgər seat artıq tutulubsa, alert göstər.

// UI-də seat-ların statusunu (boş, seçilmiş, tutulmuş) vizual olaraq göstər.

// https://aztechshop.az/aksessuarlar/komp-aks/?page=4

// https://chatgpt.com/c/68f77b6d-faf4-8330-9a7d-dff45db7d2ef

//map transformlar sonra bu logic calismasi
