"""Build the English, single-page faculty development brief (ReportLab)."""

from pathlib import Path

from reportlab.lib.colors import HexColor
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfgen.canvas import Canvas
from reportlab.platypus import Paragraph


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "output/pdf/faculty-development-workshops-michal-mazur.pdf"
FONT_DIR = Path("/System/Library/Fonts/Supplemental")

INK = "#202724"
TEAL = "#175754"
MUTED = "#53625F"
RULE = HexColor("#CDD7D4")

TOPICS = (
    (
        "Teaching in English (EMI)",
        "Bring a syllabus or lesson plan for a course that uses English-medium instruction. Practise "
        "giving clearer instructions, checking understanding, and getting students talking "
        "when the room goes quiet.",
    ),
    (
        "Active learning design",
        "Bring a class session that needs more student participation. Plan a short activity "
        "around one learning goal, then try it with colleagues and decide what to change.",
    ),
    (
        "Intercultural communication",
        "Compare how people read the same situation. Practise questions that help a group "
        "check what each person understood before deciding how to respond.",
    ),
    (
        "Generative AI in teaching",
        "Bring an assignment or feedback task. Decide what AI can help with, what still "
        "needs human judgement, and what students should disclose.",
    ),
)


def link(label: str, url: str) -> str:
    return f'<link href="{url}" color="{TEAL}"><u>{label}</u></link>'


def build() -> None:
    for name, file in (
        ("Brief Sans", "Arial.ttf"),
        ("Brief Sans Bold", "Arial Bold.ttf"),
        ("Brief Serif", "Georgia.ttf"),
    ):
        pdfmetrics.registerFont(TTFont(name, str(FONT_DIR / file)))

    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    canvas = Canvas(str(OUTPUT), pagesize=A4, pageCompression=1, invariant=1)
    canvas.setTitle("Faculty Development Workshops | Michał Maciej Mazur")
    canvas.setAuthor("Michał Maciej Mazur")
    canvas.setSubject("Workshop topics and invitations for university faculty and graduate students")
    canvas.setCreator("Michał Maciej Mazur")

    width, height = A4
    left, right = 52, width - 52
    measure = right - left

    def text(content, x, top, span, *, font="Brief Sans", size=11.5, leading=16, color=INK):
        style = ParagraphStyle(
            "brief", fontName=font, fontSize=size, leading=leading,
            alignment=TA_LEFT, textColor=HexColor(color),
        )
        para = Paragraph(content, style)
        _, used = para.wrap(span, height)
        para.drawOn(canvas, x, top - used)
        return top - used

    def section_label(content, top):
        return text(content, left, top, measure, font="Brief Sans Bold", size=10.5, leading=14, color=TEAL)

    def rule(y):
        canvas.setStrokeColor(RULE)
        canvas.setLineWidth(0.6)
        canvas.line(left, y, right, y)

    y = height - 54
    y = text("Michał Maciej Mazur", left, y, measure, font="Brief Sans Bold", size=12, leading=16, color=TEAL)
    y = text(
        "Assistant Professor, Ritsumeikan Asia Pacific University · Beppu, Japan",
        left, y - 3, measure, size=10.5, leading=14, color=MUTED,
    )
    y = text("Faculty Development Workshops", left, y - 23, measure, font="Brief Serif", size=29, leading=37)
    y = text(
        "I work with university faculty and graduate students who teach, or are preparing to teach, "
        "in multilingual and international classrooms.",
        left, y - 9, measure,
    )

    y = section_label("Workshop topics", y - 23)
    y -= 9
    rule(y)
    topic_width, gap = 137, 18
    for title, description in TOPICS:
        top = y - 12
        title_bottom = text(title, left, top, topic_width, font="Brief Sans Bold", size=11.5, leading=15)
        description_bottom = text(description, left + topic_width + gap, top, measure - topic_width - gap)
        y = min(title_bottom, description_bottom) - 11
        rule(y)

    y = section_label("Selected experience", y - 20)
    hokkaido = link("Hokkaido University", "https://ctl.high.hokudai.ac.jp/en/seminar/b20241121en/")
    tokyo = link("University of Tokyo", "https://www.he.u-tokyo.ac.jp/topics-item/1133/")
    pre_fd = link("APU’s Pre-FD programme", "https://mazur.jp/apu-pre-fd.html")
    space_programme = link("Ritsumeikan Space Management Program", "https://www.ritsumei.ac.jp/rsmp/news/article.html/?id=24")
    unitar = link("UNITAR’s Youth Ambassador Programme", "https://mazur.jp/achievements.html#unitar-yaapp-2026-en")
    kitami = link("Kitami Institute of Technology", "https://researcher.apu.ac.jp/apuhp/KgApp?Language=2&resId=S001740")
    spaces = link("Educational Spaces forum", "https://mazur.jp/achievements.html#educational-spaces-2026-en")
    y = text(
        f"I’ve led workshops on teaching in English at {hokkaido} and the {tokyo}. "
        f"In {pre_fd}, I work with graduate students on designing and rehearsing a class.",
        left, y - 5, measure, size=11, leading=15,
    )
    y = text(
        f"I’ve spoken about generative AI at {kitami} and about intercultural learning at the "
        f"{spaces} and for {unitar}. For the {space_programme}, I’ve taught intercultural leadership "
        "to students preparing to work in international teams.",
        left, y - 5, measure, size=11, leading=15,
    )

    y = section_label("Formats and invitations", y - 18)
    y = text(
        "Workshops can run for 90 minutes or a half-day, or be arranged as a short series. "
        "I also adapt these topics for seminars and guest lectures. When you get in touch, "
        "tell me who will attend, what they’d like to work on, and your preferred dates.",
        left, y - 5, measure, size=11, leading=15,
    )
    rule(y - 16)

    email = link("seishunamigo@gmail.com", "mailto:seishunamigo@gmail.com?subject=Workshop%20invitation")
    portfolio = link("Workshop portfolio", "https://mazur.jp/workshops.html")
    y = text(f"{email} &nbsp;&nbsp;·&nbsp;&nbsp; {portfolio}", left, y - 26, measure, size=11, leading=15)
    if y < 36:
        raise ValueError(f"Brief ran into the bottom margin: {y:.1f} pt")
    canvas.showPage()
    canvas.save()


if __name__ == "__main__":
    build()
