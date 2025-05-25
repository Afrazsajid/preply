"use client";

import { useEffect, useState } from "react";
import {
  User,
  Mail,
  Calendar,
  GraduationCap,
  IdCard,
  Users,
  DollarSign,
  ArrowLeft,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useSearchParams } from "next/navigation";

import html2canvas from "html2canvas";

// inside your component Page

const downloadIdCard = () => {
  const element = document.getElementById("id-card") as HTMLElement;
  if (!element) return;

  html2canvas(element).then((canvas: HTMLCanvasElement) => {
    const link = document.createElement("a");
    link.download = "Student_ID_Card.png";
    link.href = canvas.toDataURL();
    link.click();
  });
};

interface StudentData {
  fullName: string;
  email: string;
  fatherName: string;
  age: number;
  education: string;
  courseName: string;
  fees: string;
  submittedAt: string;
}
const Page = () => {
  const searchParams = useSearchParams();
  const emailParam = searchParams.get("email"); // get email from url like ?email=user@example.com

  const [students, setStudents] = useState<StudentData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://script.googleusercontent.com/macros/echo?user_content_key=AehSKLi_KlwRh_tX35Rd2iSf3Wr6GWCYk6oanSmmtrAH4okkDsRx9EBupfgR63iz3ykhKm5iQLXRKEg6Je8PcquzLdPSEPmMV0lnu7ZtpPllgdUD-i3MuASoxSVJYiODMR7rgs4JIKMXyRidTvzfnw4JKYZkUuRGy4bhNKJo46W-lasyXOCbsH3u37k7Pe5fSda4EV13gAIPwCAoz4qFnBfu6FsiqidIofIvlW-qZ7SsgH1PBO24E4ew81MXxhCc2pEMuAIZahIqME5SQkzYgCY534IoMJRzFRNGnzvPn7MX&lib=MJ2ZBBgQ9i65MeKEp54GhUc2XxytK1DWs"
        );
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();

        const formattedData: StudentData[] = data.Name.map(
          (_: string, index: number) => ({
            fullName: data.Name[index],
            fatherName: data["Father Name"][index],
            age: data.Age[index],
            email: data.Email[index],
            education: data.Education[index],
            courseName: data.CourseName[index],
            fees: data.Fees[index],
            submittedAt: data.SubmittedAt?.[index] || new Date().toISOString(),
          })
        );

        // Filter the student by emailParam
        if (emailParam) {
          const filtered = formattedData.filter(
            (student) =>
              student.email.toLowerCase() === emailParam.toLowerCase()
          );
          setStudents(filtered);
        } else {
          // If no email param provided, set all or empty
          setStudents([]);
        }
      } catch (err) {
        console.error("Failed to fetch data:", err);
        setError("Unable to load student data.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [emailParam]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-green-50">
        <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500 font-semibold text-lg">
        {error}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-green-50 p-4">
      <div className="max-w-3xl mx-auto space-y-8">
        {students.map((student, idx) => (
          <Card
            key={idx}
            className="backdrop-blur-sm bg-white/80 border-0 shadow-xl hover:shadow-2xl transition-all duration-300 animate-scale-in"
          >
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-xl text-gray-800 flex items-center justify-center gap-2">
                <User className="w-5 h-5" />
                Student Information
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-6">
              {[
                {
                  title: "Full Name",
                  value: student.fullName,
                  icon: <User className="w-5 h-5 text-blue-600" />,
                  bg: "from-blue-50 to-indigo-50 border-blue-100 text-blue-800",
                },
                {
                  title: "Father Name",
                  value: student.fatherName,
                  icon: <Users className="w-5 h-5 text-purple-600" />,
                  bg: "from-purple-50 to-violet-50 border-purple-100 text-purple-800",
                },
                {
                  title: "Email Address",
                  value: student.email,
                  icon: <Mail className="w-5 h-5 text-green-600" />,
                  bg: "from-green-50 to-emerald-50 border-green-100 text-green-800",
                },
                {
                  title: "Course Name",
                  value: student.courseName,
                  icon: <GraduationCap className="w-5 h-5 text-orange-600" />,
                  bg: "from-orange-50 to-yellow-50 border-orange-100 text-orange-800",
                },
                {
                  title: "Fees Status",
                  value: student.fees,
                  icon: <DollarSign className="w-5 h-5 text-red-600" />,
                  bg: "from-red-50 to-pink-50 border-red-100 text-red-800",
                },
                {
                  title: "Verified On",
                  value: formatDate(student.submittedAt),
                  icon: <Calendar className="w-5 h-5 text-gray-600" />,
                  bg: "from-gray-50 to-slate-50 border-gray-100 text-gray-800",
                },
              ].map((section, i) => (
                <div
                  key={i}
                  className={`bg-gradient-to-r ${section.bg} rounded-lg p-4 border`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    {section.icon}
                    <span className="text-sm font-medium">{section.title}</span>
                  </div>
                  <p className="text-lg font-semibold text-gray-800 ml-8">
                    {section.value}
                  </p>
                </div>
              ))}

              {/* ID Card */}
              <div
                id="id-card"
                style={{
                  borderRadius: "0.5rem",
                  padding: "1rem",
                }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <IdCard className="w-5 h-5 text-teal-600" />
                  <span className="text-sm font-medium text-teal-800">
                    Student ID Card
                  </span>
                </div>
                <div className="ml-8 bg-white rounded-lg p-4 border-2 border-teal-200 shadow-sm">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-xs font-bold text-teal-700 uppercase tracking-wide">
                      Saylani Mass IT Training
                    </div>
                    <div className="text-xs text-gray-500">Student ID</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-sm font-semibold text-gray-800">
                      {student.fullName}
                    </div>
                    <div className="text-xs text-gray-600">{student.email}</div>
                    <div className="text-xs text-gray-500">
                      {student.courseName}
                    </div>
                    <div className="text-xs text-gray-500">
                      Father: {student.fatherName}
                    </div>
                    <div className="text-xs text-teal-600 font-mono">
                      ID: SMIT{(student.email + student.fullName).length + idx}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <Button
                  onClick={downloadIdCard}
                  className="mt-4 bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-md shadow"
                >
                  Download ID Card
                </Button>
              </div>

              {/* Status Badge */}
              <div className="flex justify-center">
                <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 text-sm font-medium">
                  ✅ Successfully Verified
                </Badge>
              </div>
            </CardContent>
          </Card>
        ))}

        {/* Back Button */}
        <div className="flex justify-center">
          <Button
            onClick={() => (window.location.href = "/")}
            variant="outline"
            className="flex items-center gap-2 px-6 py-3 border-2 border-gray-300 hover:border-blue-400 hover:bg-blue-50 transition-all duration-300 transform hover:scale-[1.02]"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Page;
