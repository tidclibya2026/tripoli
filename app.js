/* ===============================
   Tripoli Tourism Platform JS
   منصة طرابلس السياحية
   =============================== */

const IMAGE_BASE = "https://raw.githubusercontent.com/tidclibya2026/tripoli/main/";

const attractions = [
  {
    title: "السرايا الحمراء",
    type: "موقع تاريخي",
    image: IMAGE_BASE + "red_castle_1.jpg",
    desc: "أيقونة طرابلس التاريخية ومركز بصري مهم في الترويج السياحي للمدينة.",
    meta: ["تاريخ", "تراث", "تصوير"]
  },
  {
    title: "قوس ماركوس أوريليوس",
    type: "موقع أثري",
    image: IMAGE_BASE + "Marcus%20Arch.JPG",
    desc: "شاهد أثري بارز داخل المدينة القديمة، مناسب كبطاقة تعريف ومسار زيارة قصير.",
    meta: ["أثري", "مدينة قديمة", "مسار"]
  },
  {
    title: "التراث المعماري",
    type: "هوية عمرانية",
    image: IMAGE_BASE + "Architectural%20heritage1.JPG",
    desc: "تفاصيل معمارية تعكس ذاكرة المكان وتدعم تجربة المشي داخل المدينة.",
    meta: ["عمارة", "هوية", "ثقافة"]
  },
  {
    title: "المطاعم المحلية",
    type: "تجربة طعام",
    image: IMAGE_BASE + "Tribulus%20Restaurant.jpeg",
    desc: "إبراز المطاعم والتجارب المحلية ضمن المسارات السياحية والخدمات المساندة.",
    meta: ["مطاعم", "تجربة", "خدمات"]
  },
  {
    title: "الإيواء السياحي",
    type: "خدمات",
    image: IMAGE_BASE + "hotel_4.jpeg",
    desc: "عرض الفنادق ومرافق الإقامة بصورة منظمة تخدم الزائر والقطاع السياحي.",
    meta: ["فنادق", "إقامة", "راحة"]
  },
  {
    title: "الصناعات التقليدية",
    type: "حرف وأسواق",
    image: IMAGE_BASE + "crafts_1.jpg",
    desc: "ربط الحرفيين والمنتجات المحلية بالترويج السياحي والاقتصاد الثقافي.",
    meta: ["حرف", "سوق", "تراث"]
  }
];

const routes = [
  {
    icon: "🏛",
    title: "مسار المدينة القديمة",
    desc: "مسار قصير يجمع التاريخ والأسواق والمعالم القريبة.",
    steps: [
      "قوس ماركوس",
      "أزقة المدينة القديمة",
      "السرايا الحمراء",
      "سوق الصناعات التقليدية"
    ]
  },
  {
    icon: "🌊",
    title: "مسار البحر والحياة",
    desc: "تجربة تجمع الواجهة البحرية والمقاهي والمطاعم.",
    steps: [
      "الكورنيش",
      "مقهى محلي",
      "مطعم ليبي",
      "نقطة تصوير"
    ]
  },
  {
    icon: "🎨",
    title: "مسار الحرف والتراث",
    desc: "مسار يربط الزائر بالحرفيين والأسواق والمنتجات المحلية.",
    steps: [
      "سوق الحرف",
      "عرض حي",
      "منتجات تقليدية",
      "توثيق التجربة"
    ]
  }
];

/* إنشاء بطاقة معلم سياحي */
function createAttractionCard(item) {
  const meta = item.meta.map((m) => `<span>${m}</span>`).join("");

  return `
    <article class="tour-card">
      <div class="card-image">
        <img 
          src="${item.image}" 
          alt="${item.title}" 
          loading="lazy"
          onerror="this.src='https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1200&auto=format&fit=crop';"
        >
        <span class="card-badge">${item.type}</span>
      </div>

      <div class="card-body">
        <h3>${item.title}</h3>
        <p>${item.desc}</p>
        <div class="card-meta">
          ${meta}
        </div>
      </div>
    </article>
  `;
}

/* إنشاء بطاقة مسار سياحي */
function createRouteCard(route) {
  const steps = route.steps.map((step) => `<li>${step}</li>`).join("");

  return `
    <article class="route-card">
      <div class="route-icon">${route.icon}</div>
      <h3>${route.title}</h3>
      <p>${route.desc}</p>
      <ul class="route-steps">
        ${steps}
      </ul>
    </article>
  `;
}

/* عرض البيانات داخل الصفحة */
function renderContent() {
  const attractionsGrid = document.getElementById("attractionsGrid");
  const routesGrid = document.getElementById("routesGrid");

  if (attractionsGrid) {
    attractionsGrid.innerHTML = attractions.map(createAttractionCard).join("");
  }

  if (routesGrid) {
    routesGrid.innerHTML = routes.map(createRouteCard).join("");
  }
}

/* قائمة الهاتف */
function setupMenu() {
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  if (!menuToggle || !navLinks) return;

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("is-open");
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("is-open");
    });
  });
}

/* حركة ظهور ناعمة للعناصر */
function setupRevealAnimation() {
  const animatedElements = document.querySelectorAll(
    ".tour-card, .route-card, .service-panel, .highlight-grid, .crafts-grid, .map-card"
  );

  if (!animatedElements.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.animate(
            [
              {
                opacity: 0,
                transform: "translateY(24px)"
              },
              {
                opacity: 1,
                transform: "translateY(0)"
              }
            ],
            {
              duration: 650,
              easing: "cubic-bezier(.2,.8,.2,1)",
              fill: "forwards"
            }
          );

          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12
    }
  );

  animatedElements.forEach((element) => {
    element.style.opacity = "0";
    observer.observe(element);
  });
}

/* تشغيل كل الوظائف عند تحميل الصفحة */
document.addEventListener("DOMContentLoaded", () => {
  renderContent();
  setupMenu();
  setupRevealAnimation();
});
