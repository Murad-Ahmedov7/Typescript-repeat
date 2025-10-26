import { useEffect, useState } from "react";
import "./App.css";









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


