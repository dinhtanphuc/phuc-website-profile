/* EN <-> VI switch. English is the source text in the HTML; Vietnamese is looked up by exact text. */
(function () {
  var VI = {
    "Skip to content": "Chuyển đến nội dung",
    "Drag or use the arrows": "Kéo hoặc dùng mũi tên",
    "Read article": "Đọc bài viết",
    "Open to remote & international opportunities": "Sẵn sàng làm việc từ xa & cơ hội quốc tế",
    "Nha Trang, Vietnam · UTC+7": "Nha Trang, Việt Nam · UTC+7",
    "QC Engineer": "QC Engineer",
    "About": "Giới thiệu",
    "Expertise": "Chuyên môn",
    "Work & Experience": "Dự án & Kinh nghiệm",
    "Samples": "Mẫu thực tế",
    "Writing": "Bài viết",
    "Contact": "Liên hệ",
    "Manual · Automation · AI-assisted QA": "Thủ công · Automation · QA hỗ trợ bởi AI",
    "QC Engineer building": "QC Engineer xây dựng",
    "reliable software": "phần mềm đáng tin cậy",
    "through smart testing.": "bằng kiểm thử thông minh.",
    "Nearly 5 years across manual testing, Cypress/Playwright automation, API testing and AI-assisted QA. I help teams catch defects earlier, shorten regression cycles and ship with confidence.": "Gần 5 năm kinh nghiệm kiểm thử thủ công, automation Cypress/Playwright, kiểm thử API và QA hỗ trợ bởi AI. Tôi giúp đội ngũ phát hiện lỗi sớm hơn, rút ngắn chu kỳ regression và phát hành tự tin.",
    "View my work": "Xem dự án của tôi",
    "Get in touch": "Liên hệ với tôi",
    "Download CV": "Tải CV",
    "yrs": "năm",
    "Hands-on QA experience": "Kinh nghiệm QA thực tế",
    "Less manual regression effort via automation": "Giảm công sức regression thủ công nhờ automation",
    "Testing disciplines: manual, UI, API, performance": "Mảng kiểm thử: thủ công, UI, API, hiệu năng",
    "Technical articles on QA & AI testing": "Bài viết kỹ thuật về QA & kiểm thử AI",
    "Exploratory Testing": "Kiểm thử khám phá",
    "Regression": "Regression",
    "API Testing": "Kiểm thử API",
    "Quality is a team habit, not a final phase.": "Chất lượng là thói quen của cả đội, không phải bước cuối cùng.",
    "I'm a Junior QC Engineer at Infodation, working on complex multi-platform products. I design test strategies, write detailed test cases, automate critical business flows and mentor junior testers.": "Tôi là Junior QC Engineer tại Infodation, làm việc với các sản phẩm đa nền tảng phức tạp. Tôi xây dựng chiến lược kiểm thử, viết test case chi tiết, tự động hóa các luồng nghiệp vụ quan trọng và hướng dẫn các bạn tester mới.",
    "Lately I focus on": "Gần đây tôi tập trung vào",
    "AI-assisted testing": "kiểm thử hỗ trợ bởi AI",
    ": using Playwright MCP, custom agents and Atlassian MCP to speed up exploratory testing, script generation and test case design, while keeping a human in the loop for judgement.": ": dùng Playwright MCP, custom agent và Atlassian MCP để tăng tốc kiểm thử khám phá, sinh script và thiết kế test case, đồng thời luôn có con người kiểm soát và đưa ra phán đoán.",
    "Outside work I play football and badminton, which keep me sharp on teamwork and quick decisions.": "Ngoài giờ làm, tôi chơi bóng đá và cầu lông, giúp tôi rèn tinh thần đồng đội và khả năng ra quyết định nhanh.",
    "Role": "Vai trò",
    "Junior QC Engineer": "Junior QC Engineer",
    "Company": "Công ty",
    "Location": "Địa điểm",
    "Nha Trang, Vietnam (UTC+7)": "Nha Trang, Việt Nam (UTC+7)",
    "Education": "Học vấn",
    "B.Sc. Information Technology, Nha Trang University": "Cử nhân Công nghệ thông tin, Đại học Nha Trang",
    "Languages": "Ngôn ngữ",
    "Vietnamese (native), English (professional)": "Tiếng Việt (bản ngữ), tiếng Anh (chuyên môn)",
    "Availability": "Sẵn sàng",
    "Open to remote roles": "Mở cho vị trí làm từ xa",
    "What I bring to a team": "Tôi mang gì đến đội ngũ",
    "A full-stack QA toolkit, from requirement analysis to automated regression and AI-powered workflows.": "Bộ công cụ QA toàn diện, từ phân tích yêu cầu đến regression tự động và quy trình có AI hỗ trợ.",
    "Manual & Exploratory Testing": "Kiểm thử thủ công & khám phá",
    "Test planning, estimation, test design (EP, BVA, decision tables), functional, UAT and exploratory testing.": "Lập kế hoạch test, ước lượng, thiết kế test (EP, BVA, bảng quyết định), kiểm thử chức năng, UAT và kiểm thử khám phá.",
    "Test Design": "Thiết kế test",
    "Exploratory": "Khám phá",
    "UI Test Automation": "Automation kiểm thử UI",
    "Maintainable E2E suites for key business flows that cut manual regression time.": "Bộ test E2E dễ bảo trì cho các luồng nghiệp vụ chính, giúp giảm thời gian regression thủ công.",
    "API & Performance Testing": "Kiểm thử API & hiệu năng",
    "REST API validation with collection runs and environment management; load testing for critical endpoints.": "Kiểm tra REST API bằng collection và quản lý môi trường; kiểm thử tải cho các endpoint quan trọng.",
    "AI-Assisted Testing": "Kiểm thử hỗ trợ bởi AI",
    "Using MCP servers and custom agents to generate test cases, explore applications and self-heal scripts.": "Dùng MCP server và custom agent để sinh test case, khám phá ứng dụng và tự sửa script.",
    "Custom Agents": "Custom Agent",
    "Leadership & Mentoring": "Dẫn dắt & hướng dẫn",
    "Peer reviews and guidance for junior QC members to keep deliverables consistent and high quality.": "Review chéo và hướng dẫn các thành viên QC mới để sản phẩm bàn giao nhất quán và chất lượng.",
    "Code & Test Review": "Review code & test",
    "Onboarding": "Hướng dẫn người mới",
    "Collaboration": "Phối hợp",
    "Close work with developers, POs and clients; clear bug reports and honest quality status.": "Làm việc sát với dev, PO và khách hàng; báo cáo lỗi rõ ràng và trạng thái chất lượng trung thực.",
    "Agile / Scrum": "Agile / Scrum",
    "Bug Reporting": "Báo cáo lỗi",
    "Analytical Thinking": "Tư duy phân tích",
    "Where I've worked": "Nơi tôi đã làm việc",
    "The products and teams I've helped ship, grouped by company. Currently at Infodation, working on 3 projects in parallel.": "Các sản phẩm và đội nhóm tôi đã cùng phát hành, nhóm theo công ty. Hiện tại ở Infodation, làm song song 3 dự án.",
    "Current employer": "Công ty hiện tại",
    "Junior QC Engineer · Feb 2022 – Present ·": "Junior QC Engineer · 02/2022 – Nay ·",
    "Nha Trang, Vietnam · Software & AI solutions for international clients": "Nha Trang, Việt Nam · Giải pháp phần mềm & AI cho khách hàng quốc tế",
    "projects & teams": "dự án & đội nhóm",
    "European client markets": "thị trường khách hàng châu Âu",
    "active right now": "đang chạy",
    "Oct 2026 – Present": "10/2026 – Nay",
    "Active": "Đang chạy",
    "QC · AI drawing-processing solution": "QC · Giải pháp AI xử lý bản vẽ",
    "AI tool that scans and processes engineering drawings for a client": "Công cụ AI quét và xử lý bản vẽ kỹ thuật cho khách hàng",
    "Responsible for the tool's effectiveness: does the AI output genuinely save the client's team time?": "Chịu trách nhiệm về hiệu quả của công cụ: kết quả AI có thực sự giúp đội của khách hàng tiết kiệm thời gian?",
    "Evaluates accuracy and usefulness of AI output, not just functional correctness.": "Đánh giá độ chính xác và tính hữu ích của kết quả AI, không chỉ tính đúng đắn về chức năng.",
    "AI Quality": "Chất lượng AI",
    "Effectiveness Testing": "Kiểm thử hiệu quả",
    "Aug – Oct 2026": "08 – 10/2026",
    "QC · IDEA team (Infodation Enterprise Application)": "QC · Đội IDEA (Infodation Enterprise Application)",
    "Internal tools for company staff, built 100% with AI": "Công cụ nội bộ cho nhân viên công ty, xây dựng 100% bằng AI",
    "Worked in an AI-first delivery flow: apps created with Claude and Spec Kit.": "Làm việc theo quy trình ưu tiên AI: ứng dụng được tạo bằng Claude và Spec Kit.",
    "Tested with AI assistance and built Playwright automation for the new apps.": "Kiểm thử có AI hỗ trợ và xây dựng automation Playwright cho các ứng dụng mới.",
    "Apr 2025 – Jul 2026": "04/2025 – 07/2026",
    "QC · AT Crew (automation enablement)": "QC · AT Crew (thúc đẩy automation)",
    "3 QC members and a management lead": "3 thành viên QC và 1 quản lý",
    "Formed when the company began rolling out automation testing across all teams.": "Thành lập khi công ty bắt đầu triển khai automation testing cho toàn bộ các đội.",
    "Guided and onboarded teams, and resolved the practical obstacles of applying automation.": "Hướng dẫn, tiếp nhận các đội và giải quyết khó khăn thực tế khi áp dụng automation.",
    "Jul – Sep 2025: embedded with the GRIDSZ Data team to support Cypress automation while they struggled to adopt it.": "07 – 09/2025: hỗ trợ trực tiếp đội GRIDSZ Data triển khai automation Cypress khi họ gặp khó khăn trong việc áp dụng.",
    "Automation Strategy": "Chiến lược automation",
    "Coaching": "Kèm cặp",
    "Oct 2023 – Present": "10/2023 – Nay",
    "QC · Belgian internet-connection management platform": "QC · Nền tảng quản lý kết nối internet (Bỉ)",
    "Team of 2 DEV + 1 QC · Belgium": "Đội 2 DEV + 1 QC · Bỉ",
    "Platform that manages and tracks the rollout of internet connections to households.": "Nền tảng quản lý và theo dõi tiến độ lắp đặt kết nối internet đến từng hộ gia đình.",
    "Same scope as the Dutch platform with a much smaller team: owns testing end to end and sprint demos for the client.": "Phạm vi như nền tảng Hà Lan nhưng đội nhỏ hơn nhiều: phụ trách kiểm thử toàn bộ và demo sprint cho khách hàng.",
    "Manual": "Thủ công",
    "Sprint Demo": "Demo sprint",
    "Small-team QA": "QA đội nhỏ",
    "Feb 2022 – Present": "02/2022 – Nay",
    "Maintenance": "Bảo trì",
    "QC · Dutch internet-connection management platform": "QC · Nền tảng quản lý kết nối internet (Hà Lan)",
    "Team scaled from 10 DEV + 3 QC down to 2 DEV + 1 QC · Netherlands": "Đội thu gọn từ 10 DEV + 3 QC xuống 2 DEV + 1 QC · Hà Lan",
    "Test planning, test case design and execution for every sprint; demo to the client every 2 weeks.": "Lập kế hoạch test, thiết kế và thực thi test case mỗi sprint; demo cho khách hàng 2 tuần một lần.",
    "Stayed through the product's growth into its maintenance phase, keeping releases stable with a shrinking team.": "Đồng hành cùng sản phẩm từ giai đoạn phát triển đến bảo trì, giữ các bản phát hành ổn định khi đội ngày càng nhỏ lại.",
    "Core responsibilities across projects": "Trách nhiệm chính xuyên suốt các dự án",
    "Test strategy & planning": "Chiến lược & kế hoạch kiểm thử",
    "Test plans, timeline estimates and detailed test cases for complex multi-platform features.": "Test plan, ước lượng thời gian và test case chi tiết cho các tính năng đa nền tảng phức tạp.",
    "API testing": "Kiểm thử API",
    "RESTful APIs with Postman, JMeter and Swagger, including automated collection runs and environment variable management.": "RESTful API với Postman, JMeter và Swagger, gồm chạy collection tự động và quản lý biến môi trường.",
    "Automation & mentoring": "Automation & hướng dẫn",
    "Cypress/Playwright regression that cut manual testing time by 40%, plus reviews and guidance for junior QC members.": "Regression Cypress/Playwright giúp giảm 40% thời gian kiểm thử thủ công, cùng việc review và hướng dẫn các thành viên QC mới.",
    "B.Sc. in Information Technology": "Cử nhân Công nghệ thông tin",
    "Nha Trang University · Khanh Hoa, Vietnam": "Đại học Nha Trang · Khánh Hòa, Việt Nam",
    "Want the deeper dives? Read my": "Muốn xem sâu hơn? Hãy đọc",
    "articles on AI-assisted testing and automation": "các bài viết về kiểm thử hỗ trợ bởi AI và automation",
    "QA samples": "Mẫu QA",
    "How I document quality": "Cách tôi ghi nhận chất lượng",
    "Illustrative examples of the artifacts I write. Real project artifacts are confidential, so these use a fictional login and checkout feature.": "Ví dụ minh họa các tài liệu tôi viết. Tài liệu dự án thật được bảo mật nên đây dùng tính năng đăng nhập và thanh toán giả định.",
    "Test cases": "Test case",
    "Bug report": "Báo cáo lỗi",
    "Test approach": "Hướng tiếp cận kiểm thử",
    "ID": "Mã",
    "Title": "Tiêu đề",
    "Technique": "Kỹ thuật",
    "Steps": "Các bước",
    "Expected result": "Kết quả mong đợi",
    "Priority": "Ưu tiên",
    "Login with valid credentials": "Đăng nhập với thông tin hợp lệ",
    "EP · valid": "EP · hợp lệ",
    "1. Open /login": "1. Mở /login",
    "2. Enter a registered email and valid password": "2. Nhập email đã đăng ký và mật khẩu hợp lệ",
    "3. Click Sign in": "3. Bấm Đăng nhập",
    "User lands on the dashboard and a session is created": "Người dùng vào trang dashboard và phiên đăng nhập được tạo",
    "High": "Cao",
    "Password at the minimum length (8)": "Mật khẩu đúng độ dài tối thiểu (8)",
    "BVA · boundary": "BVA · biên",
    "1. Sign in with an account whose password has exactly 8 characters": "1. Đăng nhập với tài khoản có mật khẩu đúng 8 ký tự",
    "Login succeeds": "Đăng nhập thành công",
    "Medium": "Trung bình",
    "Set a password one below the minimum (7)": "Đặt mật khẩu ít hơn tối thiểu 1 ký tự (7)",
    "1. Open Change password": "1. Mở Đổi mật khẩu",
    "2. Enter a 7-character password": "2. Nhập mật khẩu 7 ký tự",
    "3. Submit": "3. Gửi",
    "Validation message: \"Password must be at least 8 characters\"": "Thông báo lỗi: \"Mật khẩu phải có ít nhất 8 ký tự\"",
    "Invalid email format": "Email sai định dạng",
    "EP · invalid": "EP · không hợp lệ",
    "1. Enter \"user@\" as the email": "1. Nhập \"user@\" vào ô email",
    "2. Click Sign in": "2. Bấm Đăng nhập",
    "Inline error is shown and no request is sent": "Hiện lỗi ngay tại ô nhập và không gửi request",
    "Account lock after 5 failed attempts": "Khóa tài khoản sau 5 lần nhập sai",
    "Decision table": "Bảng quyết định",
    "1. Enter a wrong password 5 times": "1. Nhập sai mật khẩu 5 lần",
    "2. Enter the correct password": "2. Nhập mật khẩu đúng",
    "Account is locked for 15 minutes, a message is shown and the correct password is rejected during the lock": "Tài khoản bị khóa 15 phút, hiện thông báo và mật khẩu đúng vẫn bị từ chối trong thời gian khóa",
    "EP = equivalence partitioning, BVA = boundary value analysis.": "EP = phân vùng tương đương, BVA = phân tích giá trị biên.",
    "Severity: Major": "Mức độ: Nghiêm trọng",
    "Priority: High": "Ưu tiên: Cao",
    "Open": "Mở",
    "Order total is not recalculated after removing a promo code at checkout": "Tổng đơn hàng không được tính lại sau khi xóa mã khuyến mãi ở bước thanh toán",
    "Environment": "Môi trường",
    "Staging · Chrome 130 · Windows 11": "Staging · Chrome 130 · Windows 11",
    "Build": "Bản build",
    "Found in": "Phát hiện trong",
    "Sprint 14 regression": "Regression sprint 14",
    "Steps to reproduce": "Các bước tái hiện",
    "Add any product to the cart and open checkout.": "Thêm bất kỳ sản phẩm nào vào giỏ và mở trang thanh toán.",
    "Apply promo code": "Áp dụng mã khuyến mãi",
    "; the total drops by 10%.": "; tổng tiền giảm 10%.",
    "Click Remove next to the promo code.": "Bấm Xóa bên cạnh mã khuyến mãi.",
    "Expected": "Mong đợi",
    "The promo line disappears and the total returns to the original amount.": "Dòng khuyến mãi biến mất và tổng tiền trở về số ban đầu.",
    "Actual": "Thực tế",
    "The promo line disappears but the total keeps the discounted amount until the page is reloaded.": "Dòng khuyến mãi biến mất nhưng tổng tiền vẫn giữ số đã giảm cho đến khi tải lại trang.",
    "Attachments: screen recording, network log (HAR). Suspected cause: totals are only recalculated on apply, not on remove.": "Đính kèm: video quay màn hình, log mạng (HAR). Nghi ngờ nguyên nhân: tổng tiền chỉ được tính lại khi áp dụng mã, không tính lại khi xóa.",
    "Scope": "Phạm vi",
    "Features in and out of scope, supported browsers and devices, integrations.": "Tính năng trong và ngoài phạm vi, trình duyệt và thiết bị hỗ trợ, các tích hợp.",
    "Risks": "Rủi ro",
    "Product risks ranked by impact and likelihood to decide where to test deepest.": "Rủi ro sản phẩm xếp theo mức ảnh hưởng và khả năng xảy ra để quyết định nơi cần test sâu nhất.",
    "Approach": "Cách tiếp cận",
    "Manual and exploratory sessions, API checks, and which flows are automated for regression.": "Các buổi test thủ công và khám phá, kiểm tra API, và luồng nào được tự động hóa cho regression.",
    "Environments & data": "Môi trường & dữ liệu",
    "Test environments, accounts, seed data and third-party sandboxes.": "Môi trường test, tài khoản, dữ liệu mẫu và sandbox của bên thứ ba.",
    "Entry & exit criteria": "Tiêu chí bắt đầu & kết thúc",
    "What must be ready to start testing and what \"done\" means for the release.": "Điều kiện cần có để bắt đầu test và thế nào là \"hoàn thành\" cho bản phát hành.",
    "Reporting": "Báo cáo",
    "Daily defect status, regression results and a clear release-readiness summary.": "Tình trạng lỗi hằng ngày, kết quả regression và tóm tắt rõ ràng mức độ sẵn sàng phát hành.",
    "How I work": "Cách tôi làm việc",
    "A repeatable quality process": "Quy trình chất lượng lặp lại được",
    "Consistent steps, adapted to each team's size and delivery cadence.": "Các bước nhất quán, điều chỉnh theo quy mô và nhịp phát hành của từng đội.",
    "Analyse": "Phân tích",
    "Review requirements, flag ambiguity and risks early.": "Xem xét yêu cầu, chỉ ra điểm mơ hồ và rủi ro từ sớm.",
    "Plan": "Lập kế hoạch",
    "Test strategy, scope and estimation.": "Chiến lược test, phạm vi và ước lượng.",
    "Design": "Thiết kế",
    "Traceable test cases with EP, BVA and decision tables.": "Test case truy vết được với EP, BVA và bảng quyết định.",
    "Execute & Automate": "Thực thi & Automation",
    "Manual, exploratory and automated runs.": "Chạy test thủ công, khám phá và tự động.",
    "Report": "Báo cáo",
    "Clear defects and honest release-readiness status.": "Lỗi rõ ràng và trạng thái sẵn sàng phát hành trung thực.",
    "Technical articles": "Bài viết kỹ thuật",
    "Practical notes on test automation and AI-assisted QA.": "Ghi chép thực tế về automation testing và QA hỗ trợ bởi AI.",
    "AI Testing": "Kiểm thử AI",
    "Quality Solutions": "Giải pháp chất lượng",
    "Automation": "Automation",
    "Beyond testing": "Ngoài công việc kiểm thử",
    "Life · Aug 2025": "Đời sống · 08/2025",
    "VnExpress Marathon Nha Trang 2025": "VnExpress Marathon Nha Trang 2025",
    "Story coming soon": "Câu chuyện sắp ra mắt",
    "Life · Dec 2025": "Đời sống · 12/2025",
    "Small Liquor Store Owner": "Chủ tiệm rượu nhỏ",
    "All articles": "Tất cả bài viết",
    "Let's build quality together": "Cùng xây dựng chất lượng nhé",
    "Hiring for a QA / QC role or need help with test automation? I'd be glad to talk.": "Bạn đang tuyển vị trí QA / QC hoặc cần hỗ trợ automation testing? Rất vui được trao đổi.",
    "Name": "Tên",
    "Email": "Email",
    "Message": "Tin nhắn",
    "Send message": "Gửi tin nhắn",
    "© 2026 Phuc Tan Dinh · QC Engineer · Nha Trang, Vietnam": "© 2026 Phuc Tan Dinh · QC Engineer · Nha Trang, Việt Nam",
    "Articles & stories": "Bài viết & câu chuyện",
    "Practical notes on test automation and AI-assisted QA, plus a few stories from life outside work.": "Ghi chép thực tế về automation testing và QA hỗ trợ bởi AI, cùng vài câu chuyện đời sống ngoài công việc.",
    "All": "Tất cả",
    "QC & Tech": "QC & Công nghệ",
    "Life": "Đời sống",
    "AI Testing · Dec 2025": "Kiểm thử AI · 12/2025",
    "Quality Solutions · Apr 2026": "Giải pháp chất lượng · 04/2026",
    "Automation · Apr 2026": "Automation · 04/2026",
    "Automation · Dec 2025": "Automation · 12/2025",
    "Quality Solutions · Nov 2025": "Giải pháp chất lượng · 11/2025"
  };
  var VI_WORDS = 'phần mềm đáng tin cậy|bản phát hành nhanh hơn|những lần ra mắt tự tin|chất lượng ở tốc độ cao';
  var VI_FORM = { 'data-err-required': 'Vui lòng điền đầy đủ các ô.', 'data-sending': 'Đang gửi...', 'data-ok': 'Cảm ơn bạn! Tin nhắn đã được gửi.', 'data-fail': 'Không gửi được. Vui lòng email trực tiếp cho tôi.' };

  var originals = new Map();   // text node -> original string
  var origWords = null, origForm = {};
  var lang = 'en';

  function norm(t) { return t.replace(/\s+/g, ' ').trim(); }

  function walk(toVi) {
    var w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode: function (n) {
        var p = n.parentNode && n.parentNode.nodeName;
        return (p === 'SCRIPT' || p === 'STYLE' || !n.nodeValue.trim()) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
      }
    });
    var n, nodes = [];
    while ((n = w.nextNode())) nodes.push(n);
    nodes.forEach(function (node) {
      if (toVi) {
        var key = norm(node.nodeValue), vi = VI[key];
        if (vi === undefined) return;
        if (!originals.has(node)) originals.set(node, node.nodeValue);
        var m = node.nodeValue.match(/^(\s*)[\s\S]*?(\s*)$/);
        node.nodeValue = m[1] + vi + m[2];
      } else if (originals.has(node)) {
        node.nodeValue = originals.get(node);
        originals.delete(node);
      }
    });
  }

  function tenure() {
    document.querySelectorAll('[data-since]').forEach(function (el) {
      var p = el.getAttribute('data-since').split('-'), now = new Date();
      var m = (now.getFullYear() - +p[0]) * 12 + (now.getMonth() + 1 - +p[1]);
      if (m < 1) return;
      var y = Math.floor(m / 12), r = m % 12, out = [];
      if (lang === 'vi') { if (y) out.push(y + ' năm'); if (r) out.push(r + ' tháng'); }
      else { if (y) out.push(y + (y > 1 ? ' yrs' : ' yr')); if (r) out.push(r + (r > 1 ? ' mos' : ' mo')); }
      el.textContent = out.join(' ');
    });
  }

  function apply(next) {
    var toVi = next === 'vi';
    if (next === lang && originals.size === 0 && !toVi) { sync(); return; }
    lang = next;
    walk(toVi);
    var rot = document.querySelector('.rotator');
    if (rot) {
      if (origWords === null) origWords = rot.getAttribute('data-words');
      rot.setAttribute('data-words', toVi ? VI_WORDS : origWords);
      rot.textContent = rot.getAttribute('data-words').split('|')[0];
    }
    var form = document.getElementById('contactForm');
    if (form) Object.keys(VI_FORM).forEach(function (k) {
      if (!(k in origForm)) origForm[k] = form.getAttribute(k);
      if (toVi) form.setAttribute(k, VI_FORM[k]); else if (origForm[k] === null) form.removeAttribute(k); else form.setAttribute(k, origForm[k]);
    });
    document.documentElement.setAttribute('lang', toVi ? 'vi' : 'en');
    tenure();
    sync();
    try { localStorage.setItem('lang', next); } catch (e) {}
  }

  function sync() {
    var btn = document.getElementById('langBtn');
    if (btn) { btn.textContent = lang === 'vi' ? 'EN' : 'VI'; btn.setAttribute('aria-label', lang === 'vi' ? 'Switch to English' : 'Chuyển sang tiếng Việt'); }
  }

  var btn = document.getElementById('langBtn');
  if (btn) btn.addEventListener('click', function () { apply(lang === 'vi' ? 'en' : 'vi'); });

  var q = null, saved = null;
  try { q = new URLSearchParams(location.search).get('lang'); saved = localStorage.getItem('lang'); } catch (e) {}
  var start = q || saved;
  if (start === 'vi') apply('vi'); else sync();
})();
