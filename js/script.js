// Sidebar Collapse
    const sidebar = document.getElementById("sidebar");
    const mainContent = document.getElementById("mainContent");
    const sidebarToggle = document.getElementById("sidebarToggle");

    sidebarToggle.addEventListener("click", () => {
      sidebar.classList.toggle("open");
      mainContent.classList.toggle("shifted");
    });

    // Charts
    const ctxPie = document.getElementById('postsByCategoryChart').getContext('2d');
  new Chart(ctxPie, {
    type: 'pie',
    data: {
      labels: ['فرانت‌اند', 'بک‌اند', 'دیتابیس', 'DevOps'],
      datasets: [{
        label: 'مطالب',
        data: [12, 9, 5, 4],
        backgroundColor: ['#0d6efd', '#198754', '#ffc107', '#dc3545'],
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { position: 'bottom' }
      }
    }
  });

    const lineCtx = document.getElementById('postsPerMonthChart').getContext('2d');
    new Chart(lineCtx, {
      type: 'line',
      data: {
        labels: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور'],
        datasets: [{
          label: 'مطالب',
          data: [5, 9, 7, 14, 10, 12],
          borderColor: '#dc3545',
          backgroundColor: 'rgba(220, 53, 69, 0.1)',
          fill: true,
          tension: 0.3
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

    // Bar Chart: بازدید سایت
    const visitsCtx = document.getElementById('siteVisitsChart').getContext('2d');
    new Chart(visitsCtx, {
      type: 'bar',
      data: {
        labels: ['شنبه', 'یکشنبه', 'دوشنبه', 'سه‌شنبه', 'چهارشنبه', 'پنجشنبه', 'جمعه'],
        datasets: [{
          label: 'بازدیدها',
          data: [120, 190, 300, 500, 200, 300, 400],
          backgroundColor: '#198754'
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });