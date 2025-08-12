import { Card, CardContent } from "@/components/ui/card";

export function PromptGuidance() {
  return (
    <Card className="mb-8">
      <CardContent className="py-2 px-10">
        <div className="prose dark:prose-invert max-w-full">
          <h2 className="mb-2">
            💡 หลักการ Prompt ที่ดี: ให้ AI เป็น &quot;เพื่อนร่วมงาน&quot;
            ที่เก่ง
          </h2>
          <p className="text-sm text-muted-foreground">
            ลองเปลี่ยนมุมมองจากการคิดว่า AI เป็นแค่เครื่องมือ
          </p>
          <p className="text-sm text-muted-foreground">
            ให้คิดว่า AI เป็น &quot;เพื่อนร่วมงาน&quot; ที่มีความรู้มหาศาล
            แต่ต้องการคำสั่งที่ชัดเจนและเป็นลำดับขั้นตอน
          </p>
          <p className="text-sm text-muted-foreground">
            การ prompt ที่ดี จึงควรมีลักษณะคล้ายกับการมอบหมายงานให้เพื่อนร่วมงาน
          </p>
          <ol className="list-decimal pl-6 mt-6 text-sm">
            <li className="my-4">
              <span className="font-semibold">กำหนดบทบาท (Role-playing):</span>{" "}
              บอก AI ว่าให้สวมบทบาทเป็นอะไร
              <p className="my-1">
                <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                  Act as a senior full-stack developer
                </code>
              </p>
            </li>
            <li className="my-4">
              <span className="font-semibold">ระบุงานที่ต้องการ (Task):</span>{" "}
              บอกอย่างเจาะจงว่าต้องการให้ทำอะไร
              <p className="my-1">
                <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                  Generate a React component for a user profile card
                </code>
              </p>
            </li>
            <li className="my-4">
              <span className="font-semibold">ให้ข้อมูลประกอบ (Context):</span>{" "}
              ยิ่งมีข้อมูลมากเท่าไหร่ AI ยิ่งเข้าใจและให้ผลลัพธ์ที่ตรงจุดมากขึ้น
              <p className="my-1">
                <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                  The app is a to-do list, using Next.js and Tailwind CSS
                </code>
              </p>
            </li>
            <li className="my-4">
              <span className="font-semibold">
                ระบุรูปแบบผลลัพธ์ที่ต้องการ (Format):
              </span>{" "}
              บอกว่าอยากได้ผลลัพธ์ในรูปแบบไหน
              <p className="my-1">
                <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                  Provide the code snippet only
                </code>
              </p>
            </li>
          </ol>

          <h3 className="mt-12 mb-2">เทคนิคสำหรับสถานการณ์ต่างๆ</h3>
          <ul className="list-disc pl-6 text-sm">
            <li className="my-4">
              <span className="font-semibold">ตอนทำ New Feature:</span>
              <p className="my-1">
                <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                  ...outline the high-level steps for both the frontend and
                  backend development.
                </code>
              </p>
            </li>
            <li className="my-4">
              <span className="font-semibold">ตอนมี Issue / Bug:</span>
              <p className="my-1">
                <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                  Act as a debugger. I&apos;m getting an error in the following
                  React component...
                </code>
              </p>
            </li>
            <li className="my-4">
              <span className="font-semibold">ตอนคิดไอเดีย:</span>
              <p className="my-1">
                <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                  You are an expert product manager. My web app is a simple
                  photo gallery... Please brainstorm 5 innovative ideas...
                </code>
              </p>
            </li>
          </ul>

          <h3 className="mt-12 mb-2">คำแนะนำเพิ่มเติม</h3>
          <ul className="list-disc pl-6 text-sm">
            <li className="my-2">
              <span className="font-semibold">ใช้ภาษาที่ชัดเจน:</span>{" "}
              ใช้คำสั่งที่เจาะจงและละเอียด
            </li>
            <li className="my-2">
              <span className="font-semibold">ใส่ตัวอย่าง:</span> ถ้าเป็นไปได้
              ให้ใส่ตัวอย่างโค้ดหรือรูปแบบที่คุณต้องการ
            </li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
