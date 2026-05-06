import { useState } from "react";
import InputField from "./InputField";
import TextAreaField from "./TextAreaField";
import SelectField from "./SelectField";
import InfoBox from "./InfoBox";

export default function CreateTeamForm() {
  const [form, setForm] = useState({
    name: "",
    description: "",
    category: "",
  });

  const [errors, setErrors] = useState({});

  // Handle change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Validasi sederhana
  const validate = () => {
    const newErrors = {};

    if (!form.name || form.name.length < 3) {
      newErrors.name = "Nama tim minimal 3 karakter";
    }

    if (!form.category) {
      newErrors.category = "Kategori wajib dipilih";
    }

    return newErrors;
  };

  // Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    // 🔥 nanti ganti ini dengan API call
    console.log("Form submitted:", form);

    alert("Tim berhasil dibuat!");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-xl shadow-md p-6 max-w-xl mx-auto space-y-5"
    >
      <h2 className="text-lg font-semibold text-center">
        ✏️ Buat Tim Baru
      </h2>

      {/* Nama Tim */}
      <InputField
        label="Nama Tim"
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Contoh: Code Legends"
        maxLength={50}
        required
        error={errors.name}
      />

      {/* Deskripsi */}
      <TextAreaField
        label="Deskripsi Tim"
        name="description"
        value={form.description}
        onChange={handleChange}
        placeholder="Jelaskan tentang tim Anda..."
        maxLength={300}
      />

      {/* Kategori */}
      <SelectField
        label="Kategori Utama"
        name="category"
        value={form.category}
        onChange={handleChange}
        options={[
          { label: "Web Development", value: "web" },
          { label: "Mobile Development", value: "mobile" },
          { label: "UI/UX Design", value: "uiux" },
          { label: "Artificial Intelligence", value: "ai" },
        ]}
        required
        error={errors.category}
      />

      {/* Info */}
      <InfoBox
        title="Informasi"
        items={[
          "Tim dapat memiliki maksimal 5 anggota",
          "Anda akan menjadi tim leader",
          "Dapat mengundang anggota setelah tim dibuat",
          "Anggota dapat menerima atau menolak undangan",
        ]}
      />

      {/* Submit */}
      <button
        type="submit"
        className="w-full bg-gradient-to-r from-blue-700 to-blue-500 text-white py-3 rounded-xl font-semibold hover:opacity-90 transition"
      >
        Buat Tim
      </button>
    </form>
  );
}